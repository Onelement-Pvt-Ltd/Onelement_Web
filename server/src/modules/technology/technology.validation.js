import { z } from "zod";

export const createTechnologySchema = z.object({
  body: z.object({
    title: z.string().min(3),
    banner: z.object({
      image: z.string().url(),
      subtitle: z.string().optional()
    }),
    description: z.object({
      highlightTitle: z.string(),
      paragraphs: z.array(z.string()).min(1)
    }),
    points: z.array(
      z.object({
        title: z.string(),
        content: z.string()
      })
    )
  })
});

export const updateTechnologySchema = createTechnologySchema.partial();
