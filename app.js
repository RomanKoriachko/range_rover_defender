let menuIcon = document.querySelector(".header-menu-icon");
let mobileDesktop = document.querySelector(".header-menu-desktop");
let mobileMenu = document.querySelector(".header-menu-mobile");
let headerButtons = document.querySelector(".header-btns");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  mobileDesktop.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("lock");
  //   headerButtons.classList.toggle("hide");
});
