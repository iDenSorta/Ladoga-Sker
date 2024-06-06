// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".photo-swiper", {
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,

  slidePrevClass: "aaa",

  effect: "cards",

  grabCursor: true,
  cardsEffect: {
    perSlideOffset: 25,
    rotate: false,
    slideShadows: false,
  },
});
