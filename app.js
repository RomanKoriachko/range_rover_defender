let menuIcon = document.querySelector(".header-menu-icon");
let mobileDesktop = document.querySelector(".header-menu-desktop");
let mobileMenu = document.querySelector(".header-menu-mobile");
let headerButtons = document.querySelector(".header-btns");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  mobileDesktop.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("lock");
});

let header = document.querySelector(".header");
let navigationBar = document.querySelector(".nav-section");

window.onscroll = function () {
  if (
    navigationBar.getBoundingClientRect().y === 0 &&
    document.body.scrollWidth > 992
  ) {
    header.classList.add("hide-header");
    navigationBar.classList.add("scrolled");
    navigationBar.classList.remove("not-scrolled");
  } else {
    header.classList.remove("hide-header");
    navigationBar.classList.remove("scrolled");
    navigationBar.classList.add("not-scrolled");
  }
};
