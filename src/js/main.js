'use strict';

const slides = document.querySelectorAll('.slider__img-inner');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
const slider = document.querySelector('.slider');

const hero = [
  'https://c4.wallpaperflare.com/wallpaper/282/685/305/batman-v-superman-dawn-of-justice-superman-wallpaper-preview.jpg',
  'https://images8.alphacoders.com/674/thumb-1920-674801.jpg',
  'https://wallpapercave.com/wp/dGfBYK6.jpg',
  'https://wallscloud.net/uploads/cache/2167957366/822A92FA-EE50-4E75-AFE0-F024AFD6F895-1024x576-MM-90.jpeg',
];

let slideIndex = 0;

const showSlides = (index, img) => {
  slides.forEach(elem => (elem.style.display = 'none'));

  slides[index].style.display = 'block';
  slider.style.backgroundImage = `url(${hero[slideIndex]})`;
};

btnPrev.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideIndex = 0;
  }
  if (slideIndex > 0) {
    showSlides((slideIndex -= 1));
    slider.style.backgroundImage = `url(${hero[slideIndex]})`;
    localData();
  }
});

btnNext.addEventListener('click', () => {
  if (slideIndex < slides.length - 1) {
    showSlides((slideIndex += 1));
    slider.style.backgroundImage = `url(${hero[slideIndex]})`;
    localData();
  }
});

function localData() {
  localStorage.setItem('hero', slideIndex);
  localStorage.getItem('hero', slideIndex);
}

showSlides(slideIndex, hero[0]);
