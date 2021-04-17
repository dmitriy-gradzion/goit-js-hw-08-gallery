import gallery from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightboxCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

const markupGallery = createGallery(gallery);
refs.gallery.insertAdjacentHTML('beforeend', markupGallery);

function createGallery(gallery) {
  return gallery.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        loading="lazy"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
    }).join('');
};

refs.gallery.addEventListener('click', onPicsOpen);

function onPicsOpen(e) {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    e.preventDefault();
    refs.lightbox.classList.add("is-open");
};

refs.lightboxCloseBtn.addEventListener("click", onClickClose);

function onClickClose() {
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImg.src = "";
    refs.lightboxImg.alt = "";
};