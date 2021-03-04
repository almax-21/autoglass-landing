// main-navigation

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.onclick = () => {
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
  navToggle.classList.toggle("toggle--active");
};


// smooth-scroll

'use strict';

(function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href$="#"])');

  if (window.smoothscroll) {
    window.__forceSmoothScrollPolyfill__ = true;
    window.smoothscroll.polyfill();
  }

  const initScrollThrough = (link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const currentSection = document.querySelector(evt.target.hash);

      if (currentSection) {
        currentSection.scrollIntoView({behavior: 'smooth'});
      }
    });
  };

  const initAnchors = (links) => {
    for (let i = 0; i < links.length; i += 1) {
      initScrollThrough(links[i]);
    }
  };

  initAnchors(anchorLinks);
})();


// modals

const showButtons = document.querySelectorAll(".quality-list__picture");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal__close");
const modalBackground = document.querySelector(".modal-background");

const addClickHandler = function (button, modal, close) {
  const removeModal = () => {
    modal.classList.remove("modal--show");
    modalBackground.classList.remove("modal-background--show");
  };

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add("modal--show");
    modalBackground.classList.add("modal-background--show");
  });

  close.addEventListener("click", () => {
    removeModal();
  });

  modalBackground.addEventListener("click", () => {
    removeModal();
  });

  window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      removeModal();
    }
  });
};

for (var i = 0; i < showButtons.length; i++) {
  addClickHandler(showButtons[i], modals[i], closeButtons[i]);
}
