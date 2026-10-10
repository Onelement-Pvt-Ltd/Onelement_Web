export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : err.statusCode && err.statusCode < 500
          ? err.message
          : "Something went wrong"
  });
};
