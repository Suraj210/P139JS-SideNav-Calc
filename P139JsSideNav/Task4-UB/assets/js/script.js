"use strict";

let sideNav = document.querySelector(".side-nav");
let toggleIcon = document.querySelector(".side-nav_icons i");
let toggleContainer = document.querySelector(".side-nav_icons");

toggleIcon.addEventListener("click", function () {
  if (toggleIcon.classList.contains("fa-bars")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-circle-xmark");
    toggleContainer.classList.add("side-nav_icon--justify");
    sideNav.classList.add("side-nav--display");
  } else {
    toggleIcon.classList.add("fa-bars");
    toggleIcon.classList.remove("fa-circle-xmark");
    toggleContainer.classList.remove("side-nav_icon--justify");

    sideNav.classList.remove("side-nav--display");
  }
});
