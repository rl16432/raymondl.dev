import type { CollectionEntry } from 'astro:content';

export const sortByDate = (posts: CollectionEntry<'posts'>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
  );
};
