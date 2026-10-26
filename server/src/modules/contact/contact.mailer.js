import nodemailer from "nodemailer";
import { env } from "../../config/env.js";

let transporter;

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const requireMailConfiguration = () => {
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS || !env.CONTACT_TO) {
    const error = new Error("Contact email service is not configured");
    error.statusCode = 503;
    throw error;
  }
};

const getTransporter = () => {
  requireMailConfiguration();
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

export const sendContactMessage = ({ name, email, comments }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeComments = escapeHtml(comments).replaceAll("\n", "<br />");
  const subjectName = name.replace(/[\r\n]+/g, " ");

  return getTransporter().sendMail({
    from: `"Onelement Website" <${env.CONTACT_FROM || env.SMTP_USER}>`,
    to: env.CONTACT_TO,
    replyTo: email,
    subject: `Website enquiry from ${subjectName}`,
    disableFileAccess: true,
    disableUrlAccess: true,
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
  });
};
