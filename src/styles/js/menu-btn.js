// Менюшка header

let menuBtn = document.querySelector(".menu__btn");
let header = document.querySelector(".header");
let menuWrapper = document.querySelector(".menu-nav");
let menulogo = document.querySelector(".logo");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "" : "hidden";
  menuWrapper.classList.toggle("active");
  menulogo.classList.toggle("active");
  header.classList.toggle("active");
});
