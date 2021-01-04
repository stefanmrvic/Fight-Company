const mediaQueryMedium = window.matchMedia("(min-width: 1024px)");

if(mediaQueryMedium.matches) {

    let targetAllEvents = document.querySelectorAll('.anim1');
    let targetFeaturedEvents = document.querySelectorAll('.anim2');
    let targetFooter = document.querySelectorAll('.anim3');

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    }

    //Animations for All Events Section
    let callbackEvents = (entries, observer) => {
        
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {

                if (entry.target.classList.contains('all-events__title')) {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
                else if (entry.target.classList.contains('all-events__box__event--1')) {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
                else if (entry.target.classList.contains('all-events__box__event--2')) {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
                else {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
            }
        });
    };

    let observerEvents = new IntersectionObserver(callbackEvents, options);

    targetAllEvents.forEach(el => {
    observerEvents.observe(el);
    });
    
    //Animations for Featured Events Section
    let callbackFeatured = (entries, observer) => {
        
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {

                if (entry.target.classList.contains('featured-events__title')) {
                    entry.target.style.animation = 'fadeInLeftEvents 1s forwards';
                }
                else if (entry.target.classList.contains('featured-events__box__event--1')) {
                    entry.target.style.animation = 'fadeInLeftEvents 1s forwards';
                }
                else if (entry.target.classList.contains('featured-events__box__event--2')) {
                    entry.target.style.animation = 'fadeInBottom 1s forwards';
                }
                else if (entry.target.classList.contains('featured-events__box__event--3')) {
                    entry.target.style.animation = 'fadeInRightEvents 1s forwards';
                }
                else {
                    entry.target.style.animation = 'fadeIn 1s .25s forwards';
                }
            }
        });
    };

    let observerFeatured = new IntersectionObserver(callbackFeatured, options);

    targetFeaturedEvents.forEach(el => {
        observerFeatured.observe(el);
    });

    //Animations for Upcoming Events Section
    
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
                    entry.target.style.animation = 'zoomInSocials .8s .3s forwards';
                }
            }
        });
    };

    let observerFooter = new IntersectionObserver(callbackFooter, options);

    targetFooter.forEach(el => {
        observerFooter.observe(el);
    });
}