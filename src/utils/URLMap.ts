import type { collections } from '@/content/config';

type UrlMap = Partial<{
  [key in keyof typeof collections]: string;
}>;

const urls: UrlMap = {
  posts: '/posts',
};

export const getUrl = (collection: keyof typeof urls, slug?: string) => {
  if (slug === undefined) return urls[collection];
  return urls[collection] + slug;
};
