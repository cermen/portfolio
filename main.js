'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// scroll이 될때마다 화살표 함수가 실행되도록 한다.
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// const home = document.querySelector('#home');
// const about = document.querySelector('#about');
// const skills = document.querySelector('#skills');
// const work = document.querySelector('#work');
// const testimonials = document.querySelector('#testimonials');
// const contact = document.querySelector('#contact');

// const sections = [ home, about, skills, work, testimonials, contact ];

// const buttons = document.querySelectorAll('.navbar__menu__item');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         sections[i].scrollIntoView();
//     });
// }

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    const scrollTo = document.querySelector(link)
    scrollTo.scrollIntoView({behavior: "smooth"});
})

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    contact.scrollIntoView();
});