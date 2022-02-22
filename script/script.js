"use strict";

const btnMenu = document.querySelector(".navigation__icon");
const nav = document.querySelector(".responsive__nav");
const navList1 = document.querySelector(".service");
const navList2 = document.querySelector(".partner");
const navList3 = document.querySelector(".portfolio");
// const btnLogin = document.querySelector(".navigation__btn");
const btnContact = document.querySelector(".contact");
const btnContactRes = document.querySelector(".contact-res");
const btnContactFooter = document.querySelector(".contact-footer");
const btnAboutFooter = document.querySelector(".about-footer");
const btnAbout = document.querySelector(".about");
const btnCareer = document.querySelector(".career");
const btnPricing = document.querySelector(".pricing");
const btnAboutRes = document.querySelector(".about-res");
const aboutUs = document.querySelector(".section__about");
const careersDisplay = document.querySelector(".section__career");
const pricingDisplay = document.querySelector(".section__pricing");
const contactUs = document.querySelector(".section__contact");
const backBtnAbout = document.querySelector(".btn-back-about");
const backBtnContact = document.querySelector(".btn-back-contact");
const backBtnCareer = document.querySelector(".btn-back-career");
const backBtnPricing = document.querySelector(".btn-back-pricing");
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
});
const clicked = function (e) {
  navDisplayed = false;
  nav.style.display = "none";
  btnMenu.innerHTML = `<i class="fas fa-bars"></i>`;
  console.log("btnn clicked");
};

navList1.addEventListener("click", clicked);
navList2.addEventListener("click", clicked);
navList3.addEventListener("click", clicked);
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
    navDisplayed = false;
    nav.style.display = "none";
    btnMenu.innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    contactDisplayed = false;
  }
};
btnContactRes.addEventListener("click", contactDisplay);
btnContact.addEventListener("click", contactDisplay);
btnContactFooter.addEventListener("click", contactDisplay);

//About Section Activation
let aboutDisplayed = false;

const aboutDisplay = function (e) {
  e.preventDefault();
  if (aboutDisplayed === false) {
    aboutDisplayed = true;

    aboutUs.style.display = "flex";
    aboutUs.style.height = "80vh";
    contactUs.style.display = "none";
    navDisplayed = false;
    nav.style.display = "none";
    btnMenu.innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    aboutDisplayed = false;
  }
};
btnAboutRes.addEventListener("click", aboutDisplay);
btnAbout.addEventListener("click", aboutDisplay);
btnAboutFooter.addEventListener("click", aboutDisplay);

//Activating the back buttons
//about back button
let careerDisplayed = false;
const careerDisplay = function (e) {
  e.preventDefault();
  if (careerDisplayed === false) {
    careerDisplayed = true;

    careersDisplay.style.display = "flex";
    careersDisplay.style.height = "80vh";
    pricingDisplay.style.display = "none";
    aboutUs.style.display = "none";
    contactUs.style.display = "none";
  } else {
    careerDisplayed = false;
    careersDisplay.style.display = "none";
  }
};
btnCareer.addEventListener("click", careerDisplay);

let pricingDisplayed = false;
const displayPricing = function (e) {
  e.preventDefault();
  if (pricingDisplayed === false) {
    pricingDisplayed = true;

    pricingDisplay.style.display = "flex";
    pricingDisplay.style.height = "80vh";
    careersDisplay.style.display = "none";
    aboutUs.style.display = "none";
    contactUs.style.display = "none";
  } else {
    pricingDisplayed = false;
    pricingDisplay.style.display = "none";
  }
};
btnPricing.addEventListener("click", displayPricing);

backBtnAbout.addEventListener("click", function (e) {
  e.preventDefault();

  if (aboutDisplayed === true) {
    aboutUs.style.display = "none";
  } else {
  }
});
backBtnCareer.addEventListener("click", function (e) {
  e.preventDefault();

  if (careerDisplayed === true) {
    careersDisplay.style.display = "none";
  }
});
backBtnPricing.addEventListener("click", function (e) {
  e.preventDefault();

  if (pricingDisplayed === true) {
    pricingDisplay.style.display = "none";
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
