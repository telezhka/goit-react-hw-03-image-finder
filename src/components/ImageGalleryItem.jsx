import React from 'react';
import { Modal } from './Modal';
export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  const handleClick = event => {
    event.preventDefault();
    Modal({ largeImageURL, tags });
  };
  return (
    <a href="./index.html" className="opener" onClick={handleClick}>
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    </a>
  );
};
