import { env } from "../config/env.js";

export const requireOfficialOrigin = (req, res, next) => {
  const origin = req.get("origin");
  if (!origin) {
    return res.status(403).json({ success: false, message: "Request origin required" });
  }

  try {
    if (env.FRONTEND_ORIGINS.includes(new URL(origin).origin)) return next();
  } catch {
    // Invalid origins are rejected below.
  }

  return res.status(403).json({ success: false, message: "Origin not allowed" });
};

export const rejectUnsupportedMethod = (req, res) => {
  res.set("Allow", "GET");
  return res.status(405).json({
    success: false,
    message: "Method not allowed",
  });
};
