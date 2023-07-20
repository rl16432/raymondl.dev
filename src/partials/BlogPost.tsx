import type { ReactNode } from 'react';

import { PostContent, PostHeader, Section } from '@/components';
import type { PostFrontmatter } from '@/content/_schemas';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: PostFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
