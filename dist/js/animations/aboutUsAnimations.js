window.addEventListener("load", (event) => {

    const mediaQueryMedium = window.matchMedia("(min-width: 1024px)");

    if(mediaQueryMedium.matches) {

        let targetOurPhilosofy = document.querySelectorAll('.anim1');
        let targetAboutClub = document.querySelectorAll('.anim2');
        let targetOurCoaches = document.querySelectorAll('.anim3');
        let targetFooter = document.querySelectorAll('.anim4');

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }

        //Animations for Our Philosofy Section
        let callbackPhilosofy = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('our-philosofy__left')) {
                        entry.target.style.animation = 'fadeInLeft 1s forwards';
                    }
                    else if (entry.target.classList.contains('our-philosofy__right')) {
                        entry.target.style.animation = 'fadeInBottom 1s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeIn 1s forwards';
                    }
                }
            });
        };

        let observerPhilosofy = new IntersectionObserver(callbackPhilosofy, options);

        targetOurPhilosofy.forEach(el => {
        observerPhilosofy.observe(el);
        });
        
        //Animations for About Club Section
        let callbackAboutClub = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('about-club__left')) {
                        entry.target.style.animation = 'fadeInBottom 1s forwards';
                    }
                    else if (entry.target.classList.contains('about-club__right')) {
                        entry.target.style.animation = 'fadeInRight 1s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeIn 1s forwards';
                    }
                }
            });
        };

        let observerAboutClub = new IntersectionObserver(callbackAboutClub, options);

        targetAboutClub.forEach(el => {
        observerAboutClub.observe(el);
        });

        //Animations for Our Coaches Section

        let callbackCoaches = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('our-coaches__title')) {
                        entry.target.style.animation = 'fadeIn 1s forwards';
                    }
                    else if (entry.target.classList.contains('our-coaches__box__savo__info')) {
                        entry.target.style.animation = 'fadeInLeft 1s  .11s forwards';
                    }
                    else if (entry.target.classList.contains('our-coaches__box__savo__img')) {
                        entry.target.style.animation = 'fadeInLeft 1s forwards';
                    }
                    else if (entry.target.classList.contains('our-coaches__box__aleksandar__img')) {
                        entry.target.style.animation = 'fadeInRight 1s forwards';
                    }
                    else if (entry.target.classList.contains('our-coaches__box__aleksandar__info')) {
                        entry.target.style.animation = 'fadeInRight 1s .11s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeIn 1s .2s forwards';
                    }
                }
            });
        };

        let observerCoaches = new IntersectionObserver(callbackCoaches, options);

        targetOurCoaches.forEach(el => {
            observerCoaches.observe(el);
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
});



