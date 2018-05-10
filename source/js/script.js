var nav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

nav.classList.remove('main-nav--nojs');
nav.classList.remove('main-nav--opened');
nav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {

  if (nav.classList.contains("main-nav--opened")) {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  } else {
    nav.classList.add("main-nav--opened");
    nav.classList.remove("main-nav--closed");
  }
});
