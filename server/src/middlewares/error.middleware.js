import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const statusCode = err.statusCode || 500;
  if (statusCode >= 500) {
    logger.error("Request failed", err, {
      method: req.method,
      path: req.originalUrl,
    });
  }

  res.status(statusCode).json({
    success: false,
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : statusCode < 500
          ? err.message
          : "Something went wrong"
  });
};
