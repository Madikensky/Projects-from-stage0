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

console.log('1. Вёрстка соответствует макету. Ширина экрана 768px - 26/26\n2. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется - 12/12\n3. 10/12 при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран 0/2');

