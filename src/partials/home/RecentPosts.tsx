import type { CollectionEntry } from 'astro:content';

import {
  BlogGallery,
  GradientText,
  Section,
  ViewAllButton,
} from '@/components';

type IRecentPostsProps = {
  postList: CollectionEntry<'posts'>[];
  urls: string[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-center justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <ViewAllButton href="/posts/">View all posts →</ViewAllButton>
      </div>
    }
  >
    <BlogGallery postList={props.postList} urls={props.urls} />
  </Section>
);

export { RecentPosts };
