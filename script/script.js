"use strict";

const btnMenu = document.querySelector(".navigation__icon");
const nav = document.querySelector(".navigation__nav");
// const btnLogin = document.querySelector(".navigation__btn");
const btnContact = document.querySelector(".contact");
const btnContactFooter = document.querySelector(".contact-footer");
const btnAbout = document.querySelector(".about");
const aboutUs = document.querySelector(".section__about");
const contactUs = document.querySelector(".section__contact");
const backBtnAbout = document.querySelector(".btn-back-about");
const backBtnContact = document.querySelector(".btn-back-contact");
const inputName = document.getElementById("name");
// const nav = document.querySelector(".navigation");

//Menu Icon functionality

let navDisplayed = false;

btnMenu.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("click");

  if (navDisplayed === false) {
    navDisplayed = true;

    nav.style.display = "flex";
    // btnLogin.style.display = "block";
    btnMenu.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    navDisplayed = false;
    nav.style.display = "none";
    // btnLogin.style.display = "none";
    btnMenu.innerHTML = `<i class="fas fa-bars"></i>`;
  }
  // if (!navDisplayed) return;

  // this.classList.add('.clicked');
  // if(!clicked)
  // nav.style.display = "flex";
  // btnLogin.style.display = "block";
  // btnMenu.innerHTML = `<i class="fas fa-times"></i>`;
});

//Contact Section Activation
let contactDisplayed = false;
const contactDisplay = function (e) {
  e.preventDefault();
  if (contactDisplayed === false) {
    contactDisplayed = true;

    contactUs.style.display = "flex";
    contactUs.style.height = "80vh";
    inputName.focus();
    aboutUs.style.display = "none";
  } else {
    contactDisplayed = false;
  }
};

btnContact.addEventListener("click", contactDisplay);
btnContactFooter.addEventListener("click", contactDisplay);

//About Section Activation
let aboutDisplayed = false;

btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
  if (aboutDisplayed === false) {
    aboutDisplayed = true;

    aboutUs.style.display = "flex";
    aboutUs.style.height = "80vh";
    contactUs.style.display = "none";
  } else {
    aboutDisplayed = false;
  }
});

//Activating the back buttons
//about back button

backBtnAbout.addEventListener("click", function (e) {
  e.preventDefault();

  if (aboutDisplayed === true) {
    aboutUs.style.display = "none";
  } else {
  }
});
//contact back button

// backBtnContact.disabled = false;

backBtnContact.addEventListener("click", function (e) {
  e.preventDefault();

  if (contactDisplayed === true) {
    console.log("about");

    contactUs.style.display = "none";
  } else {
  }
});

const slider = function () {
  const slides = document.querySelectorAll(".portfolio__slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("navigation__nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".navigation")
      .querySelectorAll(".navigation__nav-link");
    const logo = link.closest(".navigation").querySelector(".navigation__logo");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
