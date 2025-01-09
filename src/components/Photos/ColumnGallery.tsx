import 'react-photo-album/columns.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import { useState } from 'react';
import {
  ColumnsPhotoAlbum,
  type ColumnsPhotoAlbumProps,
  type ElementRef,
} from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import {
  Counter,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';

const Overlay = () => (
  <div
    className="absolute left-0 top-0 z-10 size-full bg-black
           opacity-0 transition-opacity ease-in-out hover:opacity-50"
  />
);

const ColumnGallery = (props: ColumnsPhotoAlbumProps & ElementRef) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ColumnsPhotoAlbum
        render={{
          extras: () => (
            // Add a black overlay on hover
            <Overlay />
          ),
        }}
        columns={(width) => {
          if (width < 600) return 1;
          if (width < 800) return 2;
          return 3;
        }}
        onClick={({ index: newIndex }) => setIndex(newIndex)}
        {...props}
      />
      <Lightbox
        slides={props.photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom, Download, Counter]}
        counter={{ container: { style: { top: 0 } } }}
      />
    </>
  );
};

export { ColumnGallery };
