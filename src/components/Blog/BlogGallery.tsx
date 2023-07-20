import type { CollectionEntry } from 'astro:content';

import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: CollectionEntry<'posts'>[];
  urls: string[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt, i) => (
      <BlogCard key={elt.slug} instance={elt} url={props.urls[i]} />
    ))}
  </div>
);

export { BlogGallery };
