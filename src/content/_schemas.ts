import { z } from 'astro:content';

import { SKILLS } from '@/constants/skillTagColors';

export const hobbySchema = z.object({
  title: z.string().optional(),
  description: z.string(),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  skills: z.array(z.enum(SKILLS)),
  imgSrc: z.string(),
  imgAlt: z.string(),
  source: z.union([z.record(z.string(), z.string().url()), z.string().url()]),
  order: z.number(),
});

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  imgSrc: z.string(),
  imgAlt: z.string(),
  draft: z.boolean().optional(),
});

export const photoSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  width: z.number(),
  height: z.number(),
});

export const albumSchema = z.object({
  title: z.string(),
  datetime: z.string().transform((str) => new Date(str)),
  mainPhoto: z.string(),
  photos: z.array(photoSchema),
});

export type PostFrontmatter = z.infer<typeof postSchema>;
export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type AlbumDetails = z.infer<typeof albumSchema>;
export type HobbyDetails = z.infer<typeof hobbySchema>;
