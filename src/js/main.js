'use strict';

const slides = document.querySelectorAll('.slider__img-inner');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');

let slideIndex = 2;

const showSlides = () => {
  slides.forEach(elem => (elem.style.display = 'none'));

  slides[slideIndex].style.display = 'block';
};

btnPrev.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideIndex = 0;
  }
  if (slideIndex > 0) {
    showSlides((slideIndex -= 1));
  }
});

btnNext.addEventListener('click', () => {
  if (slideIndex < slides.length - 1) {
    showSlides(slideIndex += 1);
  }
});

showSlides(slideIndex);
