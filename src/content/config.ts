import { defineCollection, z } from "astro:content";
import { categories } from "../configs/categories";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.date(),
      cover: z
        .object({
          img: image().optional(),
          credit: z.string().optional(),
          url: z.string().url().optional(),
        })
        .optional(),
      category: z.array(z.enum(categories as [string, ...string[]])),
    }),
});

const wordOfTheDay = defineCollection({
  loader: glob({ pattern: "words.json", base: "./src/content/word-of-the-day" }),
  schema: z.record(z.string(), z.object({
    word: z.string(),
    pronunciation: z.string(),
    meaning: z.string(),
    context: z.string().optional(),
  })),
});

export const collections = { blog, wordOfTheDay };
