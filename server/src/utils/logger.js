import { isProduction } from "../config/env.js";

const write = (level, message, context = {}) => {
  const payload = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...context,
  };
  const output = JSON.stringify(payload);
  if (level === "error") console.error(output);
  else console.log(output);
};

export const logger = {
  info(message, context) {
    write("info", message, context);
  },
  error(message, error, context = {}) {
    write("error", message, {
      ...context,
      error: error instanceof Error ? error.message : String(error || "Unknown error"),
      ...(!isProduction && error instanceof Error && error.stack ? { stack: error.stack } : {}),
    });
  },
};
