import Joi from "joi";

export const contactValidation = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^[\p{L}\p{M}][\p{L}\p{M} .'-]*$/u)
    .min(2)
    .max(80)
    .required(),
  email: Joi.string().trim().lowercase().email({ tlds: { allow: false } }).max(254).required(),
  comments: Joi.string().trim().min(10).max(3000).required(),
  website: Joi.string().allow("").max(200).default(""),
}).unknown(false);
