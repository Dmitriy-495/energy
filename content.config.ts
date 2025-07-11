import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: "articles/*.md",
      type: "page",
      schema: z.object({
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      }),
    }),
    news: defineCollection({
      source: "news/*.md",
      type: "page",
      schema: z.object({
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      }),
    }),
  },
});
