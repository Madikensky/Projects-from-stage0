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

