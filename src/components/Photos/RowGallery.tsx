import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import { useState } from 'react';
import {
  type ElementRef,
  RowsPhotoAlbum,
  type RowsPhotoAlbumProps,
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

const RowGallery = (props: RowsPhotoAlbumProps & ElementRef) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        render={{
          extras: () => (
            // Add a black overlay on hover
            <Overlay />
          ),
        }}
        targetRowHeight={300}
        rowConstraints={{ minPhotos: 1, maxPhotos: 4 }}
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

export { RowGallery };
