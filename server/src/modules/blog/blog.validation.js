import Joi from "joi";

const contentSchema = Joi.object({
  heading: Joi.string().min(5).max(150).required(),
  body: Joi.string().min(50).required()
});

export const createBlogValidation = Joi.object({
  title: Joi.string().min(10).max(200).required(),

  slug: Joi.string()
    .pattern(/^[a-z0-9-]+$/)
    .min(5)
    .max(200)
    .required(),

  excerpt: Joi.string().min(20).max(300).required(),

  coverImage: Joi.string().uri().required(),

  author: Joi.object({
    name: Joi.string().min(3).required(),
    avatar: Joi.string().uri().required()
  }).required(),

  category: Joi.string()
    .valid(
      "Hydrogen",
      "Solar",
      "Wind",
      "Energy Storage",
      "Artificial Intelligence",
      "Carbon Capture",
      "Electric Mobility",
      "Bioenergy",
      "Grid Technology"
    )
    .required(),

  tags: Joi.array().items(Joi.string()).min(1),

  content: Joi.array().items(contentSchema).min(1).required(),

  publishedAt: Joi.date().required()
});