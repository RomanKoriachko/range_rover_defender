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
let navSection = document.querySelector(".nav-section");
let navBar = document.querySelector(".navbar");

window.onscroll = function () {
  if (
    navSection.getBoundingClientRect().y <= 0 &&
    document.body.scrollWidth > 992
  ) {
    navBar.firstElementChild.classList.add("show");
    navBar.firstElementChild.classList.remove("hide");
    header.classList.add("hide-header");
    navSection.classList.add("scrolled");
    navSection.classList.remove("not-scrolled");
  } else {
    navBar.firstElementChild.classList.remove("show");
    navBar.firstElementChild.classList.add("hide");
    header.classList.remove("hide-header");
    navSection.classList.remove("scrolled");
    navSection.classList.add("not-scrolled");
  }
  activeBtn(titleExterier, titleInterier, exterierBtn);
  activeBtn(titleInterier, titleSpecs, interierBtn);
  activeBtn(titleSpecs, titleEquipment, specsBtn);
  activeBtn(titleEquipment, titleAccessory, equipmentBtn);
  activeBtn(titleAccessory, titleDiscover, accessoryBtn);
  activeBtn(titleDiscover, titleNavigationEnd, discoverBtn);
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

// navigation

let titleExterier = document.querySelector(".title-exterier");
let titleInterier = document.querySelector(".title-interier");
let titleSpecs = document.querySelector(".specs-section");
let titleEquipment = document.querySelector(".title-equipment");
let titleAccessory = document.querySelector(".title-accessory");
let titleDiscover = document.querySelector(".discover-section");
let titleNavigationEnd = document.querySelector(".main-menu-section-2");

let upBtn = document.querySelector(".up-btn");
let exterierBtn = document.querySelector(".exterier-btn");
let interierBtn = document.querySelector(".interier-btn");
let specsBtn = document.querySelector(".specs-btn");
let equipmentBtn = document.querySelector(".equipment-btn");
let accessoryBtn = document.querySelector(".accessory-btn");
let discoverBtn = document.querySelector(".discover-btn");

console.log(titleExterier.getBoundingClientRect().top);
console.log(window.pageYOffset);

upBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

exterierBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleExterier.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

interierBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleInterier.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

specsBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleSpecs.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

equipmentBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleEquipment.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

accessoryBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleAccessory.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

discoverBtn.addEventListener("click", function () {
  window.scrollTo({
    top: titleDiscover.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

function activeBtn(title, nextTitle, button) {
  if (
    window.pageYOffset >=
      title.getBoundingClientRect().top + window.pageYOffset - 1 &&
    window.pageYOffset <
      nextTitle.getBoundingClientRect().top + window.pageYOffset - 1
  ) {
    button.classList.add("active-btn");
  } else {
    button.classList.remove("active-btn");
  }
}
