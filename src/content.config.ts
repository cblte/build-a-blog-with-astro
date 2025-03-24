// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define collections
const blogCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts/" }),

  schema: z.object({
    title: z.string(),
    //description: z.string().optional(),
    //date: z.date(),
    //author: z.string(),
    //tags: z.array(z.string()).optional(),
  }),
});

// 4. Export a single 'collections' object to register your collection(s)
export const collections = {
  blogPosts: blogCollection,
};
