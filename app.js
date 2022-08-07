// Burger menu

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

// Hide header

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

// Tabs
let tabsItem = document.querySelectorAll(".tab-title-item");
let tabsContent = document.querySelectorAll(".tab-content");
let tabsWrap = document.querySelector(".tab-title-items");

function hideTabsContent() {
  tabsContent.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  });
  tabsItem.forEach((item) => {
    item.classList.remove("active-item");
  });
}

function showTabsContent(i = 0) {
  tabsContent[i].classList.add("show");
  tabsContent[i].classList.remove("hide");
  tabsItem[i].classList.add("active-item");
}

hideTabsContent();
showTabsContent();

tabsWrap.addEventListener("click", function (e) {
  let target = e.target;
  if (target && target.classList.contains("tab-title-item")) {
    tabsItem.forEach((item, i) => {
      if (target === item) {
        hideTabsContent();
        showTabsContent(i);
      }
    });
  }
});

// Exterier slider
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
  });
});
