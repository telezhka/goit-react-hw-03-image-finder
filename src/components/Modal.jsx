// import React from 'react';
import * as basicLightbox from 'basiclightbox';
export const Modal = ({ largeImageURL, tags, event }) => {
  const content = `
  <div class="backdrop"></div>
    <div class="overlay">
      <div class="modal">
        <img src="${largeImageURL}" alt="${tags}" />
      </div>
    </div>
  </div>  
  `;
  //   console.log(1);
  const lightbox = basicLightbox.create(content);

  //   const lightbox = basicLightbox.show(content);
  return lightbox.show();
};
