// document.querySelector(".burger").addEventListener("click", function () {
//   this.classList.toggle("active");
//   document.querySelector(".nav-list").classList.toggle("show-nav-list");
// });
const burgerIcon = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-list a');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  navList.classList.toggle('show-nav-list');
});

document.addEventListener('click', (event) => {
  if (!navList.contains(event.target) && !burgerIcon.contains(event.target)) {
    burgerIcon.classList.remove('active');
    navList.classList.remove('show-nav-list');
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('show-nav-list');
    burgerIcon.classList.remove('active');
  });
});

const sliderLine = document.querySelector('.slider-line');
const dots = document.querySelectorAll('.pag_button');

let position = 0;
let dotIndex = 0;

for (let e = 0; e < dots.length; e++) {
  dots[e].addEventListener('click', () => {
    position = 475 * e;
    sliderLine.style.left = -position + "px";
    currentSlide(e)
  });
}

const currentSlide = (index) => {
  for (let e of dots) {
    e.classList.remove('active-button');
  }
  dots[index].classList.add('active-button');
};
