import { z } from 'astro:content';

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  imgSrc: z.string(),
  imgAlt: z.string(),
  draft: z.boolean().optional(),
});

export type PostFrontmatter = z.infer<typeof postSchema>;
