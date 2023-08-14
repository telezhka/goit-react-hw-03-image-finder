import React from 'react';
import { openModal } from './Modal';
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  const handleClick = event => {
    event.preventDefault();
    openModal({ largeImageURL, tags });
  };
  return (
    <a href="./index.html" className="opener" onClick={handleClick}>
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </a>
  );
};
