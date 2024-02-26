import type { Page } from 'astro';
import type { CollectionEntry } from 'astro:content';

type INewerOlderPaginationProps = {
  name: String;
  page: Page<CollectionEntry<any>>;
};

const NewerOlderPagination = (props: INewerOlderPaginationProps) => (
  <div className="flex justify-center gap-8">
    {props.page.url.prev && (
      <a href={props.page.url.prev}>← Newer {props.name}</a>
    )}
    {props.page.url.next && (
      <a href={props.page.url.next}>Older {props.name} →</a>
    )}
  </div>
);

export { NewerOlderPagination };
