import { refs } from './refs';

export function renderGalleryMarkup(images) {
  const markup = images
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width = "360px";
    />
  </a>
</li>`
    )
    .join('');

  refs.galleryList.innerHTML = markup;
}
