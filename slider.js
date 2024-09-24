<<<<<<< HEAD
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-button');
const totalSlides = slides.length;

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

function updateSlider() {
  document.querySelector('.slides').style.transform = 'translateX(-' + ( window.screen.width* currentSlide) + 'px)';
  navButtons.forEach(button => button.classList.remove('active'));
  navButtons[currentSlide].classList.add('active');
=======
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-button');
const totalSlides = slides.length;

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

function updateSlider() {
  document.querySelector('.slides').style.transform = 'translateX(-' + ( window.screen.width* currentSlide) + 'px)';
  navButtons.forEach(button => button.classList.remove('active'));
  navButtons[currentSlide].classList.add('active');
>>>>>>> ce3ffac260e2c3464d50d2a6e04a987f3bb076b1
}