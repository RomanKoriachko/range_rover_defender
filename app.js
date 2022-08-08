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
    navigationBar.getBoundingClientRect().y <= 0 &&
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
let tabsItemModel = document.querySelectorAll(".model-tab-title-item");
let tabsContentModel = document.querySelectorAll(".model-tab-content");
let tabsWrapModel = document.querySelector(".model-tab-title-items");

let tabsItemEquipment = document.querySelectorAll(".equipment-tab-title-item");
let tabsContentEquipment = document.querySelectorAll(".equipment-tab-content");
let tabsWrapEquipment = document.querySelector(".equipment-tab-title-items");

function hideTabsContentModel() {
  tabsContentModel.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  });
  tabsItemModel.forEach((item) => {
    item.classList.remove("active-item");
  });
}
function hideTabsContentEquipment() {
  tabsContentEquipment.forEach((tab) => {
    tab.classList.add("hide");
    tab.classList.remove("show");
  });
  tabsItemEquipment.forEach((item) => {
    item.classList.remove("active-item");
  });
}

function showTabsContentModel(i = 0) {
  tabsContentModel[i].classList.add("show");
  tabsContentModel[i].classList.remove("hide");
  tabsItemModel[i].classList.add("active-item");
}
function showTabsContentEquipment(i = 0) {
  tabsContentEquipment[i].classList.add("show");
  tabsContentEquipment[i].classList.remove("hide");
  tabsItemEquipment[i].classList.add("active-item");
}

hideTabsContentModel();
showTabsContentModel();
hideTabsContentEquipment();
showTabsContentEquipment();

tabsWrapModel.addEventListener("click", function (e) {
  let target = e.target;
  if (target && target.classList.contains("model-tab-title-item")) {
    tabsItemModel.forEach((item, i) => {
      if (target === item) {
        hideTabsContentModel();
        showTabsContentModel(i);
      }
    });
  }
});

tabsWrapEquipment.addEventListener("click", function (e) {
  let target = e.target;
  if (target && target.classList.contains("equipment-tab-title-item")) {
    tabsItemEquipment.forEach((item, i) => {
      if (target === item) {
        hideTabsContentEquipment();
        showTabsContentEquipment(i);
      }
    });
  }
});

// Slider
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
  });
});
