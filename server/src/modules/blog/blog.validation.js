import Joi from "joi";

export const BLOG_CATEGORIES = [
  "Hydrogen", "Solar", "Wind", "Energy Storage", "Artificial Intelligence",
  "Carbon Capture", "Electric Mobility", "Bioenergy", "Grid Technology",
  "Sustainability"
];

const csvList = (itemSchema, maxItems) =>
  Joi.alternatives()
    .try(Joi.string(), Joi.array().items(Joi.string()))
    .custom((value, helpers) => {
      const items = (Array.isArray(value) ? value : [value])
        .flatMap((item) => item.split(","))
        .map((item) => item.trim())
        .filter(Boolean);
      if (items.length > maxItems) return helpers.error("array.max", { limit: maxItems });

      const validated = [];
      for (const item of items) {
        const result = itemSchema.validate(item, { convert: true });
        if (result.error) return helpers.error("any.invalid");
        if (!validated.includes(result.value)) validated.push(result.value);
      }
      return validated;
    }, "comma-separated list validation");

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
    .valid(...BLOG_CATEGORIES)
    .required(),

  tags: Joi.array().items(Joi.string()).min(1),

  content: Joi.array().items(contentSchema).min(1).required(),

  publishedAt: Joi.date().required()
});

export const blogListQueryValidation = Joi.object({
  category: csvList(
    Joi.string().trim().min(1).max(60).pattern(/^[A-Za-z0-9 &-]+$/),
    20
  ),
  year: csvList(Joi.number().integer().min(2000).max(2100), 20),
  month: csvList(Joi.number().integer().min(1).max(12), 12),
  page: Joi.number().integer().min(1).max(100000).default(1),
  limit: Joi.number().integer().min(1).max(24).default(6)
}).with("month", "year").unknown(false);

export const blogSlugValidation = Joi.object({
  slug: Joi.string().pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).min(5).max(200).required()
}).unknown(false);
