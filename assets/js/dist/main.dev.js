"use strict";

/*==================== MENU SHOW Y HIDDEN ====================*/
var navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/

/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}
/*===== MENU HIDDEN =====*/

/* Validate if constant exists */


if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}
/*==================== REMOVE MENU MOBILE ====================*/


var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/*==================== ACCORDION SKILLS ====================*/

var skillsContent = document.getElementsByClassName('skills__content');
var skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  var itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }

  ;
}

skillsHeader.forEach(function (el) {
  el.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll('[data-target]');
// const tabContents = document.querySelectorAll('[data-content]');
// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)
//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('qualification__active');
//         })
//         target.classList.add('qualification__active');
//         tab.forEach(tab => {
//             tab.classList.remove('qualification__active');
//         })
//         tab.classList.add('qualification__active')
//     });
// })

/*==================== PORTFOLIO SWIPER  ====================*/

var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    var sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  var nav = document.getElementById('header'); //when the scroll is greater than 80 vh, add the scroll-header class to the header tag

  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  var scrollUp = document.getElementById('scroll-up'); //when the scroll is heigher than 560 vh, add the show-scroll class to the header tag

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'uil-sun'; //Previously selected topic (if user selected)

var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); //We obtain current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
}; //We validate if the user previously chose a topic


if (selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to khow we activated or deacrivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme);
} //active / deactive the theme manually with the button


themeButton.addEventListener('click', function () {
  //add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); //we save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});