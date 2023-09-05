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
const prevArrow = document.querySelector(".arrow_1");
const nextArrow = document.querySelector(".arrow_2");

let position = 0;
let dotIndex = 0;

for (let e = 0; e < dots.length; e++) {
  dots[e].addEventListener('click', () => {
    position = 475 * e;
    if(position === 1900) {
      nextArrow.classList.add('opacity')
    } else {
      nextArrow.classList.remove('opacity')
    }
    if(position === 0) {
      prevArrow.classList.add('opacity')
    } else {
      prevArrow.classList.remove('opacity')
    }
    sliderLine.style.left = -position + "px";
    dotIndex = e;
    currentSlide(dotIndex)
  });
}

const currentSlide = (index) => {
  for (let e of dots) {
    e.classList.remove('active-button');
  }
  dots[index].classList.add('active-button');
};

prevArrow.addEventListener("click", () => {
  if (position !== 0) {
    position -= 475;
    sliderLine.style.left = -position + "px";
    if(position !== 1900) {
      nextArrow.classList.remove('opacity')
    }
    if (position === 0) {
      prevArrow.classList.add('opacity')
    }
    dotIndex--;
    currentSlide(dotIndex);
  }
});

nextArrow.addEventListener("click", () => {
  if (position !== 1900) {
    position += 475;
    prevArrow.classList.remove('opacity')
    if(position === 1900) {
      nextArrow.classList.add('opacity')
    } else {
      nextArrow.classList.remove('opacity')
    }
    sliderLine.style.left = -position + "px";
    dotIndex++;
    currentSlide(dotIndex);
  }
});