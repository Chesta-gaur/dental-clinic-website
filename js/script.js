// mobile header
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".mobile-nav a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
