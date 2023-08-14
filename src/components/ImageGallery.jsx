import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ pictures }) => (
  <ul className="list">
    {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
      ></ImageGalleryItem>
    ))}
  </ul>
);
