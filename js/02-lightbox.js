import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

function createMarkupGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  }).join('')
}

const galleryMarkup = createMarkupGalleryItems(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

// const gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });