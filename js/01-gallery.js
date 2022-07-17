import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createMarcupGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  }).join('');

};

const galleryMarkup = createMarcupGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', openImgInModal);

function openImgInModal(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return
  }

  const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" width="1400" height="900" >
  `)
  instance.show(() => window.addEventListener('keydown', onPressKeyEscape))

  function onPressKeyEscape(evt) {
  if (evt.code === 'Escape') {
    instance.close()
    window.removeEventListener('keydown', onPressKeyEscape)
  }
  }
};
