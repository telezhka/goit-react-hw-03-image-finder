import * as basicLightbox from 'basiclightbox';

let lightboxInstance = null; // Додано змінну для зберігання інстансу

export const openModal = ({ largeImageURL, tags }) => {
  const onClose = e => {
    e.preventDefault();
    // lightboxInstance.close();
    console.log(1);
  };
  const content = `
    <div class="backdrop">
    <div class="overlay">
      <div class="modal">
      <a href="" onClick="${onClose}">
        <img src="${largeImageURL}" alt="${tags}"/>
        </a>
      </div>
    </div>
    </div>
  `;

  lightboxInstance = basicLightbox.create(content); // Записуємо інстанс
  lightboxInstance.show();
};
