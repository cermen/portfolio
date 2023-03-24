"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// y의 위치(scrollY)가 navbarHeight보다 아래로 내려갈 때 navbar의 배경을 바꾼다.
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
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

// navbar의 각 버튼을 누를 때마다 각 섹션으로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    scrollIntoView(link);
});

// Contact Me 버튼을 누르면 contact 섹션으로 이동
const contactMe = document.querySelector(".home__contact");
// const contact = document.querySelector('#contact');
// contactMe.addEventListener('click', () => {
//     contact.scrollIntoView({behavior: "smooth"});
// });
contactMe.addEventListener("click", () => {
    scrollIntoView("#contact");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

const home = document.querySelector("#home");
const homeChildren = document.querySelectorAll("#home > *");
const homeHeight = home.getBoundingClientRect().height;

// y의 위치(scrollY)가 내려갈수록 home 의 opacity가 올라간다.
document.addEventListener("scroll", () => {
    homeChildren.forEach((item) => {
        // item.style.setProperty("opacity", (homeHeight - window.scrollY) / homeHeight);
        item.style.opacity = (homeHeight - window.scrollY) / homeHeight;
    });
});

const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

// const categoryBtn = document.querySelectorAll('.category__btn');
// categoryBtn.forEach((category) => {
//     category.addEventListener('click', () => {
//         const projects = document.querySelectorAll('.work__projects > a');
//         projects.forEach((item) => {
//             if (category.classList[1]) {
//                 const categoryName = category.classList[1];
//                 if (!item.matches(`.${categoryName}`)) {
//                     item.classList.add('hidden');
//                 } else {
//                     item.classList.remove('hidden');
//                 }
//             } else {
//                 item.classList.remove('hidden');
//             }
//         })
//     })
// })

// 프로젝트
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter =
        e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);

    if (filter === null) {
        return;
    }
    projectContainer.classList.add("anim-out");

    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        });
        projectContainer.classList.remove("anim-out");
    }, 300);
});
