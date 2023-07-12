const menuEl = document.querySelector("#menu__bar");
const toggleEl = document.querySelector("#btntoggle");
const linksEl = document.querySelector(".links");
const headerEl = document.querySelector(".header");

toggleEl.addEventListener("click", () => {
  if (menuEl.classList.contains("menu__open")) {
    menuEl.classList.remove("menu__open");
    toggleEl.classList.remove("toggle__open");
  } else {
    menuEl.classList.add("menu__open");
    toggleEl.classList.add("toggle__open");
  }

  linksEl.addEventListener("click", () => {
    if (linksEl.classList.contains("menu__open")) {
      linksEl.classList.remove("menu__open");
      toggleEl.classList.remove("toggle__open");
    }
  });
});

window.addEventListener("scroll", () => {
  const navlinkEl = document.querySelectorAll(".nav__links");
  const sectionEl = document.querySelectorAll("section");
  let currentSection = "home";

  sectionEl.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - 400) {
      currentSection = sectionEl.id;
    }
  });

  navlinkEl.forEach((navlinkEl) => {
    if (navlinkEl.href.includes(currentSection)) {
      navlinkEl.classList.add("active");
    } else {
      navlinkEl.classList.remove("active");
    }
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
