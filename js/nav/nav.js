//Navbar//
const nav = document.querySelector("#main-nav");
const logo = document.querySelector(".navbar__logo");
const navMobile = document.querySelector(".navbar__mobile");
const navMobileDarken = document.querySelector(".navbar__mobile__darken");
const navOpen = document.querySelector(".navbar__hamburger");
const navClose = document.querySelector(".navbar__mobile__button");
const distance = document.querySelector(".nav-distance");
let navDistance = distance.getBoundingClientRect().top;

document.addEventListener("scroll", function(e) {
//calculates Y coordinates from nav to top of window on scroll
    navDistance = distance.getBoundingClientRect().top;

    if (navDistance < 0) {
        logo.classList.add("navbar__logo--scrolled");
        nav.classList.add("nav--scrolled");
    }
    else {
        logo.classList.remove("navbar__logo--scrolled");
        nav.classList.remove("nav--scrolled");
    }
});

navOpen.addEventListener("click", function(e) {
    navMobile.style.right = "0";
    navMobileDarken.style.display = "block";
});

navClose.addEventListener("click", function(e) {
    navMobile.style.right = "-300px";
    navMobileDarken.style.display = "none";
});
