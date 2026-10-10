import Joi from "joi";

export const technologyListQueryValidation = Joi.object({
  page: Joi.number().integer().min(1).max(100000).default(1),
  limit: Joi.number().integer().min(1).max(24).default(10),
}).unknown(false);

export const technologySlugValidation = Joi.object({
  slug: Joi.string()
    .pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .min(2)
    .max(120)
    .required(),
}).unknown(false);
