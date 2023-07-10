import type { CollectionEntry } from 'astro:content';

import { BlogGallery, GradientText, Section } from '@/components';

type IRecentPostsProps = {
  postList: CollectionEntry<'posts'>[];
  urls: string[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} urls={props.urls} />
  </Section>
);

export { RecentPosts };
