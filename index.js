const swiper = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  speed: 500,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-right1",
    prevEl: ".swiper-left1",
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".swiper2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 2,
  freeMode: true,
  speed: 500,
  centeredSlides: true,

  // wrapper: ".swiper-wrapper1",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-right2",
    prevEl: ".swiper-left2",
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// let nav = document.getElementById("navScroll");
// function myFunction() {
//   let scrollpos = window.scrollY;
//   if (scrollpos < 100) {
//     console.log(scrollpos);
//     nav.classList.add("mystyle");
//   } else {
//     nav.classList.add("mystyle1");
//   }
// }
