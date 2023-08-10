import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => (
  <li key={id}>
    <img src={webformatURL} alt={tags} />
  </li>
);
