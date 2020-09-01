// main-navigation

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("toggle--active");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navToggle.classList.remove("toggle--active");
  }
});



// smooth-scroll

'use strict';

(function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href$="#"])');


  if (window.smoothscroll) {
    window.__forceSmoothScrollPolyfill__ = true;
    window.smoothscroll.polyfill();
  }

  var initScrollThrough = function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var currentSection = document.querySelector(event.target.hash);

      if (currentSection) {
        currentSection.scrollIntoView({behavior: 'smooth'});
      }
    });
  };

  var initAnchors = function (links) {
    for (var i = 0; i < links.length; i++) {
      initScrollThrough(links[i]);
    }
  };

  initAnchors(anchorLinks);
})();



// pop-up

var showButtons = document.querySelectorAll(".quality-list__picture");
var popups = document.querySelectorAll(".modal");
var closeButtons = document.querySelectorAll(".modal__close");
var popupBackground = document.querySelector(".modal-background");

var addClickHandler = function (button, popup, close) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    popupBackground.classList.add("modal-background--show");
  });

  close.addEventListener("click", function () {
    popup.classList.remove("modal--show");
    popupBackground.classList.remove("modal-background--show");
  });

  popupBackground.addEventListener("click", function () {
    popup.classList.remove("modal--show");
    popupBackground.classList.remove("modal-background--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal--show")) {
        evt.preventDefault();
        popup.classList.remove("modal--show");
        popupBackground.classList.remove("modal-background--show");
      }
    }
  });
};

for (var i = 0; i < showButtons.length; i++) {
  addClickHandler(showButtons[i], popups[i], closeButtons[i]);
}
