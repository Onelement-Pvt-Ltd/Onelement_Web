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

  const message = process.env.NODE_ENV === "development"
    ? err.message
    : err.publicMessage || (statusCode < 500 ? err.message : "Something went wrong");

  res.status(statusCode).json({
    success: false,
    message,
  });
};
