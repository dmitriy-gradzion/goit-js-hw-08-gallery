import gallery from './gallery-items.js';

const pics = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxCloseBtn = document.querySelector('button[data-action="close-lightbox"]');

const markupGallery = createGallery(gallery);
pics.insertAdjacentHTML('beforeend', markupGallery);

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

pics.addEventListener('click', onPicsOpen);

function onPicsOpen(e) {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    e.preventDefault();

    const origPicsUrl = e.target.dataset.source;
    e.target.classList.add('current')
    lightbox.classList.add("is-open");  
    lightboxImg.src = origPicsUrl;  
};

lightboxCloseBtn.addEventListener("click", onClickClose);

function onClickClose() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    lightboxImg.alt = "";
};