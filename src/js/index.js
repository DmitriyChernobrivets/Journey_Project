'use strict';

//======================   SLIDER   ==================================

const next = document.querySelector('.js-right');
const previous = document.querySelector('.js-left');

const slides = document.querySelectorAll('.slider_img');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = '';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'show';
}
next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};

//======================   TABS   ==================================

const tabsM = document.querySelector('.tabs_head-flex')
const tabsH = document.querySelectorAll('.tabs_head')
const tabsContent = document.querySelectorAll('.tabs_list')

const tabsShow = (e) => {
    const target = e.target;

    if (target.className !== 'tabs_head') return;

    for(let i = 0; i < tabsH.length; i++) {
        if (target === tabsH[i]) {
            tabsContent[i].classList.add('tabs-show')
            tabsH[i].classList.add('border')
        } else {
            tabsContent[i].classList.remove('tabs-show')
            tabsContent[i].classList.add('tabs-hide')
            tabsH[i].classList.remove('border')
        }
    }
}
tabsM.addEventListener('click', tabsShow);
