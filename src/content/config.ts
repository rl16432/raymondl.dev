import { defineCollection } from 'astro:content';

import { hobbySchema, postSchema, projectSchema } from './_schemas';

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const hobbyCollection = defineCollection({
  type: 'data',
  schema: hobbySchema,
});

export const collections = {
  posts: postCollection,
  projects: projectCollection,
  hobbies: hobbyCollection,
};
