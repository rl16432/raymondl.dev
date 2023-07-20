import { format } from 'date-fns';

import type { PostFrontmatter } from '@/content/_schemas';

type IPostHeaderProps = {
  content: PostFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

      <div className="mt-2 text-center text-sm text-gray-400">
        By {props.author} on{' '}
        {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
      </div>
    </>
  );
};

export { PostHeader };
