# Contact form email setup

The website sends contact submissions through the existing backend and the
`web@onelement.in` cPanel mailbox. No paid form service is required.

## 1. Create or confirm the mailbox

In cPanel, open **Email Accounts** and create `web@onelement.in` if it does not
already exist. Use a strong, unique mailbox password.

## 2. Copy the SMTP details

Open **Email Accounts > Connect Devices** for the mailbox. Use the values shown
under **Secure SSL/TLS Settings**. The server is commonly `mail.onelement.in`,
but the exact cPanel server hostname should be used when cPanel shows a
different value.

## 3. Configure the backend host

Add these environment variables to the deployed backend service:

```text
SMTP_HOST=mail.onelement.in
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=web@onelement.in
SMTP_PASS=your-mailbox-password
RESEND_API_KEY=
CONTACT_FROM=web@onelement.in
CONTACT_TO=web@onelement.in
```

For port `587`, set `SMTP_SECURE=false`. Never add the real password to Git or
to the frontend environment variables.

Render's free web services block outbound SMTP ports. For that deployment,
verify the sender domain in Resend and set `RESEND_API_KEY`. When the key is
present, the backend sends through Resend's HTTPS API and otherwise falls back
to the SMTP settings above.

## 4. Deploy and test

Redeploy the backend after saving the variables, then submit the form at
`https://onelement.in/contact`. Check both the inbox and spam folder for the
first message. Replies from the received email go directly to the visitor's
submitted address.

If cPanel rejects the connection, confirm that the backend host permits
outbound SMTP on port 465 or 587 and use the exact outgoing server hostname
shown in **Connect Devices**.
