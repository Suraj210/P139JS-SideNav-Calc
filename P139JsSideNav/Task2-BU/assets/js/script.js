"use strict";

let sideNav = document.querySelector(".side-nav");
let toggleIcon = document.querySelector(".side-nav_icons i");

toggleIcon.addEventListener("click", function () {
  if (toggleIcon.classList.contains("fa-bars")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-circle-xmark");
    sideNav.classList.add("side-nav--display");
  } else {
    toggleIcon.classList.add("fa-bars");
    toggleIcon.classList.remove("fa-circle-xmark");
    sideNav.classList.remove("side-nav--display");
  }
});
