import type { CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

type IBlogCardProps = {
  instance: CollectionEntry<'posts'>;
  url?: string;
};

const BlogCard = (props: IBlogCardProps) => (
  <a className="hover:translate-y-1" href={props.url}>
    <div className="overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="h-full w-full object-cover object-center"
          src={props.instance.data.imgSrc}
          alt={props.instance.data.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="px-3 pb-6 pt-4 text-center">
        <h2 className="text-xl font-semibold">{props.instance.data.title}</h2>

        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(props.instance.data.pubDate), 'LLL d, yyyy')}
        </div>

        <div className="mt-2 text-sm">{props.instance.data.description}</div>
      </div>
    </div>
  </a>
);

export { BlogCard };
