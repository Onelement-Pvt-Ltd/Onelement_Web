import mongoose from "mongoose";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { env, validateEnvironment } from "./src/config/env.js";
import { logger } from "./src/utils/logger.js";

validateEnvironment();
await connectDB();

const server = app.listen(env.PORT, "0.0.0.0", () => {
  logger.info("Server started", { port: env.PORT, environment: env.NODE_ENV });
});

let shuttingDown = false;
const shutdown = async (signal) => {
  if (shuttingDown) return;
  shuttingDown = true;
  logger.info("Shutdown requested", { signal });

  const forceExit = setTimeout(() => {
    logger.error("Graceful shutdown timed out", new Error("Shutdown timeout"), { signal });
    process.exit(1);
  }, env.SHUTDOWN_TIMEOUT_MS);
  forceExit.unref();

  server.close(async (serverError) => {
    try {
      await mongoose.connection.close();
    } catch (databaseError) {
      logger.error("Failed to close database connection", databaseError);
      serverError ||= databaseError;
    }

    clearTimeout(forceExit);
    if (serverError) logger.error("Server shutdown failed", serverError);
    else logger.info("Server stopped cleanly", { signal });
    process.exit(serverError ? 1 : 0);
  });

  server.closeIdleConnections?.();
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("unhandledRejection", (error) => {
  logger.error("Unhandled promise rejection", error);
  shutdown("unhandledRejection");
});
process.on("uncaughtException", (error) => {
  logger.error("Uncaught exception", error);
  shutdown("uncaughtException");
});
