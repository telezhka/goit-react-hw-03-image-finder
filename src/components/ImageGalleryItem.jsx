import React from 'react';
import { Modal } from './Modal';
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <a
      href="#"
      className="opener"
      onClick={() => Modal({ largeImageURL, tags })}
    >
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </a>
  );
};
