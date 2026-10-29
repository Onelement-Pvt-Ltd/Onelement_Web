import nodemailer from "nodemailer";
import { env } from "../../config/env.js";

let transporter;

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const requireSmtpConfiguration = () => {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS || !env.CONTACT_TO) {
    const error = new Error("Contact email service is not configured");
    error.statusCode = 503;
    throw error;
  }
};

const getTransporter = () => {
  requireSmtpConfiguration();
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }
  return transporter;
};

const sendWithResend = async ({ from, to, replyTo, subject, text, html }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text, html }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    const error = new Error(result.message || `Resend request failed with status ${response.status}`);
    error.statusCode = 502;
    throw error;
  }

  return response.json();
};

export const sendContactMessage = async ({ name, email, comments }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeComments = escapeHtml(comments).replaceAll("\n", "<br />");
  const subjectName = name.replace(/[\r\n]+/g, " ");
  const fromAddress = env.CONTACT_FROM || env.SMTP_USER;
  const message = {
    from: `"Onelement Website" <${fromAddress}>`,
    to: env.CONTACT_TO,
    replyTo: email,
    subject: `Website enquiry from ${subjectName}`,
    text: `Name: ${name}\nEmail: ${email}\n\nComments:\n${comments}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#0b2440;line-height:1.6">
        <h2 style="margin:0 0 18px;color:#0b2440">New website enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p style="margin-bottom:6px"><strong>Comments:</strong></p>
        <div style="padding:16px;border-left:4px solid #23b65f;background:#f6f8f6">${safeComments}</div>
      </div>
    `,
  };

  if (env.RESEND_API_KEY) {
    if (!fromAddress || !env.CONTACT_TO) {
      const error = new Error("Contact email service is not configured");
      error.statusCode = 503;
      throw error;
    }

    return sendWithResend(message);
  }

  return getTransporter().sendMail({
    ...message,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
};
