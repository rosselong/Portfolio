const menuEl = document.querySelector("#menu__bar");
const toggleEl = document.querySelector("#btntoggle");
const linksEl = document.querySelector(".links");
const noscrollEl = document.querySelector("body");
const headerEl = document.querySelector("#header");

toggleEl.addEventListener("click", () => {
  toggleEl.classList.add("toggle__open");
  menuEl.classList.add("menu__open");
  noscrollEl.classList.add("noscroll");
});

linksEl.addEventListener("click", () => {
  if (linksEl.classList.contains("menu__open")) {
    linksEl.classList.remove("menu__open");
    toggleEl.classList.remove("toggle__open");
  }
});

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
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
