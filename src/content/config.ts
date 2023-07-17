import { defineCollection } from 'astro:content';

import { hobbySchema, postSchema } from './_schemas';

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

const hobbyCollection = defineCollection({
  type: 'data',
  schema: hobbySchema,
});

export const collections = {
  posts: postCollection,
  hobbies: hobbyCollection,
};
