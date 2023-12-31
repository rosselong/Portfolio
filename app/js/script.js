const header = document.querySelector("header");
const menuEl = document.querySelector("#menu__bar");
const toggleEl = document.querySelector("#btntoggle");
const linksEl = document.querySelector(".links");
const noscrollEl = document.querySelector("#body");
const navlinkEl = document.querySelectorAll(".nav__links");

toggleEl.addEventListener("click", () => {
  if (menuEl.classList.contains("menu__open")) {
    toggleEl.classList.remove("toggle__open");
    menuEl.classList.remove("menu__open");
    noscrollEl.classList.remove("noscroll");
  } else {
    toggleEl.classList.add("toggle__open");
    menuEl.classList.add("menu__open");
    noscrollEl.classList.add("noscroll");
  }
});

linksEl.addEventListener("click", () => {
  if (linksEl.classList.contains("menu__open")) {
    linksEl.classList.remove("menu__open");
    toggleEl.classList.remove("toggle__open");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (menuEl.classList.contains("menu__open")) {
    header.classList.remove("scrolled");
    noscrollEl.classList.add("noscroll");
  }
});

navlinkEl.addEvenListener("click", () => {
  navlinkEl.forEach((navlinkEl) => {
    if (navlinkEl.href.includes(currentSection)) {
      navlinkEl.classList.add("active");
    } else {
      navlinkEl.classList.remove("active");
    }
  });
});
