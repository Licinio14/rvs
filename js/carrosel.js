const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const images = carouselInner.children;
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide();
}

function showSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // muda de foto a cada 5 segundos

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);