// This is the js file for my web portfolio which inlcudes adding animations
// for the hamburger menu.

"use strict";
(function () {

  let active = false;

  /**
   * Helper function that returns the element that has the ID attribute with the
   * specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
  */
  function $(id) {
    return document.getElementById(id);
  }

  /**
    Adds animation to the hamburger menu icon.
  */
  window.onload = function() {
    let hamburger = document.querySelector(".toggle");
    let spans = hamburger.querySelectorAll("span");
    hamburger.onclick = function() {
      spans[0].style.width = '32px';
      spans[1].style.transition = '.25s'
      spans[1].style.width = '32px';
      spans[1].style.margin = 'auto auto 6px';
      hamburger.classList.toggle("active");
      showSideNav(hamburger);
    };
    hamburger.addEventListener("mouseenter", function() {
      if (!hamburger.classList.contains("active")) {
        spans[1].style.transition = '.2s'
        spans[0].style.width = '28px';
        spans[1].style.width = '20px';
        spans[2].style.width = '28px';
        spans[1].style.margin = '9px auto';
      }
    });
    hamburger.addEventListener("mouseleave", function() {
      spans[0].style.width = '32px';
      spans[1].style.transition = '.25s'
      spans[1].style.width = '32px';
      spans[2].style.width = '32px';
      spans[1].style.margin = 'auto auto 6px';
    });
  };

  /**
    Displays the side navigation bar when the hamburger menu is active.
  */
  function showSideNav(hamburger) {
    let sideNav = document.querySelector(".side-nav");
    if (hamburger.classList.contains("active")) {
      sideNav.style.width = '100%';
    } else {
      sideNav.style.width = '0';
    }
  }

})();
