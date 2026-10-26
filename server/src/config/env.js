import dotenv from "dotenv";

dotenv.config();

const nodeEnv = process.env.NODE_ENV || "development";

const splitCsv = (value = "") =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeOrigin = (value) => {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
};

const frontendOrigins = splitCsv(
  process.env.FRONTEND_ORIGINS ||
    process.env.FRONT_END_URI ||
    process.env.FRONTEND_URL ||
    (nodeEnv === "production" ? "" : "http://localhost:5173")
)
  .map(normalizeOrigin)
  .filter(Boolean);

const trustProxy = /^\d+$/.test(process.env.TRUST_PROXY || "")
  ? Number(process.env.TRUST_PROXY)
  : false;

const shutdownTimeoutMs = Number(process.env.SHUTDOWN_TIMEOUT_MS || 10_000);

export const env = Object.freeze({
  PORT: Number(process.env.PORT) || 5000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: nodeEnv,
  FRONTEND_ORIGINS: [...new Set(frontendOrigins)],
  VIEW_STATS_USERNAME: process.env.VIEW_STATS_USERNAME || "",
  VIEW_STATS_PASSWORD: process.env.VIEW_STATS_PASSWORD || "",
  SMTP_HOST: process.env.SMTP_HOST || "",
  SMTP_PORT: Number(process.env.SMTP_PORT) || 465,
  SMTP_SECURE: (process.env.SMTP_SECURE || "true").toLowerCase() === "true",
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
  CONTACT_FROM: process.env.CONTACT_FROM || "",
  CONTACT_TO: process.env.CONTACT_TO || "web@onelement.in",
  TRUST_PROXY: trustProxy,
  SHUTDOWN_TIMEOUT_MS: shutdownTimeoutMs,
});

export const isProduction = env.NODE_ENV === "production";

export const validateEnvironment = () => {
  const problems = [];

  if (!env.MONGO_URI) problems.push("MONGO_URI is required");
  if (isProduction && env.FRONTEND_ORIGINS.length === 0) {
    problems.push("At least one FRONTEND_ORIGINS value is required in production");
  }
  if (isProduction && (!env.VIEW_STATS_USERNAME || env.VIEW_STATS_PASSWORD.length < 12)) {
    problems.push("VIEW_STATS_USERNAME and a VIEW_STATS_PASSWORD of at least 12 characters are required in production");
  }
  if (!Number.isInteger(env.SHUTDOWN_TIMEOUT_MS) || env.SHUTDOWN_TIMEOUT_MS < 1_000 || env.SHUTDOWN_TIMEOUT_MS > 30_000) {
    problems.push("SHUTDOWN_TIMEOUT_MS must be an integer between 1000 and 30000");
  }

  if (problems.length) {
    throw new Error(`Invalid server configuration: ${problems.join("; ")}`);
  }
};
