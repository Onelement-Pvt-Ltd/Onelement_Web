import { sendContactMessage } from "./contact.mailer.js";

export const submitContact = async (req, res, next) => {
  const { name, email, comments, website } = req.validated.body;

  if (website) {
    return res.status(202).json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  }

  try {
    await sendContactMessage({ name, email, comments });
    return res.status(202).json({
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch (error) {
    error.statusCode ||= 502;
    error.publicMessage = "We could not send your message. Please try again or email web@onelement.in.";
    return next(error);
  }
};
