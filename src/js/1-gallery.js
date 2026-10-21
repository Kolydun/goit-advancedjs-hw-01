import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';

const images = [
  { preview: img1, original: img1, description: 'Team workshop' },
  { preview: img2, original: img2, description: 'Creative idea' },
  { preview: img3, original: img3, description: 'Mobile design' },
  { preview: img4, original: img4, description: 'Meeting room' },
  { preview: img5, original: img5, description: 'Creative office' },
  { preview: img6, original: img6, description: 'Open workspace' },
  { preview: img7, original: img7, description: 'Coffee and laptop' },
  { preview: img8, original: img8, description: 'Working at laptop' },
  { preview: img9, original: img9, description: 'Team presentation' },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
