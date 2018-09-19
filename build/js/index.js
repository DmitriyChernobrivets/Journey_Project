'use strict';
//======================   SLIDER   ==================================

var next = document.querySelector('.js-right');
var previous = document.querySelector('.js-left');

var slides = document.querySelectorAll('.slider_img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);
function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = '';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'show';
}
next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};

//======================   TABS   ==================================

var tabsM = document.querySelector('.tabs_head-flex');
var tabsH = document.querySelectorAll('.tabs_head');
var tabsContent = document.querySelectorAll('.tabs_list');

var tabsShow = function tabsShow(e) {
    var target = e.target;

    if (target.className !== 'tabs_head') return;

    for (var i = 0; i < tabsH.length; i++) {
        if (target === tabsH[i]) {
            tabsContent[i].classList.add('tabs-show');
        } else {
            tabsContent[i].classList.remove('tabs-show');
            tabsContent[i].classList.add('tabs-hide');
        }
    }
};
tabsM.addEventListener('click', tabsShow);