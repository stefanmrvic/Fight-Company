let targetSpecialOffer = document.querySelectorAll('.anim2');
let targetUpcomingEvents = document.querySelectorAll('.anim3');
let targetFooter = document.querySelectorAll('.anim');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

//Animations for Meet Our Team Section

//Animations for Special Offer Section
let callbackOffer = (entries, observer) => {
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {

            if (entry.target.classList.contains('special-offer__subtitle')) {
                entry.target.style.animation = 'fadeIn 1.2s forwards';
            }
            else if (entry.target.classList.contains('special-offer__text')) {
                entry.target.style.animation = 'zoomIn 1.1s forwards';
            }
            else {
                entry.target.style.animation = 'fadeIn 1s .25s forwards';
            }
        }
    });
  };

let observerOffer = new IntersectionObserver(callbackOffer, options);

targetSpecialOffer.forEach(el => {
    observerOffer.observe(el);
});

//Animations for Upcoming Events Section
let optionsEvents = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

let callbackEvents = (entries, observer) => {
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {

            if (entry.target.classList.contains('events__title')) {
                entry.target.style.animation = 'fadeIn 1s forwards';
            }
            else if (entry.target.classList.contains('events__box__event--1')) {
                entry.target.style.animation = 'fadeInLeft 1s forwards';
            }
            else if (entry.target.classList.contains('events__box__event--2')) {
                entry.target.style.animation = 'fadeInBottom 1s forwards';
            }
            else if (entry.target.classList.contains('events__box__event--3')) {
                entry.target.style.animation = 'fadeInRight 1s forwards';
            }
            else {
                entry.target.style.animation = 'fadeIn 1s .25s forwards';
            }
        }
    });
  };

let observerEvents = new IntersectionObserver(callbackEvents, optionsEvents);

targetUpcomingEvents.forEach(el => {
    observerEvents.observe(el);
});

//Animations for Footer Section


let callbackFooter = (entries, observer) => {
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {

            if (entry.target.classList.contains('footer-social__heading')) {
            entry.target.style.animation = 'zoomIn 1s forwards';
            }
            else if (entry.target.classList.contains('footer-social__imgs')) {
                entry.target.style.animation = 'fadeInBottom 1s forwards';
            }
            else {
                entry.target.style.animation = 'zoomInSocials 1s .3s forwards';
            }
        }
    });
  };

let observerFooter = new IntersectionObserver(callbackFooter, options);

targetFooter.forEach(el => {
    observerFooter.observe(el);
});




  