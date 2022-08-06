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

window.onscroll = function () {
  if (window.scrollY > 800 && document.body.scrollWidth > 992) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }
};

// function hideHeader() {
//   console.log(window.pageYOffset);
//   window.addEventListener("scroll", function () {
//     if (window.pageYOffset > 800) {
//       header.classList.add("hide-header");
//     } else {
//       header.classList.remove("hide-header");
//     }
//   });
// }
// hideHeader();
