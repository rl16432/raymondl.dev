import type { CollectionEntry } from 'astro:content';

type IAlbumCardProps = {
  album: CollectionEntry<'photos'>;
  url?: string;
};

const AlbumCard = (props: IAlbumCardProps) => (
  <a className="transition-transform hover:translate-y-1" href={props.url}>
    <div className="h-full overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="size-full object-cover object-center"
          src={props.album.data.mainPhoto}
        />
        {/* Album label */}
        <div>
          <h2
            className="absolute bottom-0 left-1/2 z-10 mb-3
           -translate-x-1/2 rounded-md bg-slate-800 px-3 py-1 text-lg font-semibold"
          >
            {props.album.data.title}
          </h2>
        </div>
        {/* Add a black overlay on hover */}
        <div className="bg-black opacity-0 transition-opacity ease-in hover:opacity-50" />
      </div>
    </div>
  </a>
);

export { AlbumCard };
