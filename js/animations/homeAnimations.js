window.addEventListener("load", (event) => {

    const mediaQueryMedium = window.matchMedia("(min-width: 1024px)");

    if(mediaQueryMedium.matches) {

        let targetHero = document.querySelectorAll('.anim1');
        let targetHeadCoach = document.querySelectorAll('.anim2');
        let targetFightingSegments = document.querySelectorAll('.anim3');
        let targetSchedule = document.querySelectorAll('.anim4');
        let targetOurTeam = document.querySelectorAll('.anim5');
        let targetUpcomingEvents = document.querySelectorAll('.anim6');
        let targetFooter = document.querySelectorAll('.anim7');

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }

        //Animations for Hero Section
        let callbackHero = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('hero__heading__text--1')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else if (entry.target.classList.contains('hero__heading__text--2')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeInLeftHero .95s forwards';
                    }
                }
            });
        };

        let observerHero = new IntersectionObserver(callbackHero, options);

        targetHero.forEach(el => {
        observerHero.observe(el);
        });

        //Animations for Head Coach Section
        let callbackCoach = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('coach__left__img')) {
                        entry.target.style.animation = 'fadeInLeftCoach .7s forwards';
                    }
                    else if (entry.target.classList.contains('coach__right__subtitle')) {
                        entry.target.style.animation = 'fadeIn .95s forwards';
                    }
                    else if (entry.target.classList.contains('coach__right__title')) {
                        entry.target.style.animation = 'fadeIn .95s forwards';
                    }
                    else if (entry.target.classList.contains('coach__right__text')) {
                        entry.target.style.animation = 'fadeIn .95s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeInBottom .95s  forwards';
                    }
                }
            });
        };

        let observerCoach = new IntersectionObserver(callbackCoach, options);

        targetHeadCoach.forEach(el => {
        observerCoach.observe(el);
        });
        
        //Animations for Fighting Segments Section
        let callbackSegments = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('fighting-segments__title')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else if (entry.target.classList.contains('fighting-segments__text')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else if (entry.target.classList.contains('fighting-segments__classes__class--1')) {
                        entry.target.style.animation = 'fadeInLeftSegments .95s forwards';
                    }
                    else if (entry.target.classList.contains('fighting-segments__classes__class--2')) {
                        entry.target.style.animation = 'fadeInBottom .95s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeInRightSegments .95s  forwards';
                    }
                }
            });
        };

        let observerSegments = new IntersectionObserver(callbackSegments, options);

        targetFightingSegments.forEach(el => {
        observerSegments.observe(el);
        });

        //Animations for Schedule Section
        let callbackSchedule = (entries, observer) => {
            
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('schedule__title')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else {
                        entry.target.style.animation = 'zoomInSchedule 1.25s  forwards';
                    }
                }
            });
        };

        let observerSchedule = new IntersectionObserver(callbackSchedule, options);

        targetSchedule.forEach(el => {
        observerSchedule.observe(el);
        });

        //Animations for Our Team Section
        let callbackTeam = (entries, observer) => {
        
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {

                    if (entry.target.classList.contains('our-team__title')) {
                        entry.target.style.animation = 'fadeIn 1.5s forwards';
                    }
                    else if (entry.target.classList.contains('our-team__members__member--1')) {
                        entry.target.style.animation = 'fadeInBottomTeam .95s forwards';
                    }
                    else if (entry.target.classList.contains('our-team__members__member--2')) {
                        entry.target.style.animation = 'fadeInBottomTeam .95s forwards';
                    }
                    else if (entry.target.classList.contains('our-team__members__member--3')) {
                        entry.target.style.animation = 'fadeInBottomTeam .95s forwards';
                    }
                    else if (entry.target.classList.contains('our-team__members__member--4')) {
                        entry.target.style.animation = 'fadeInBottomTeam .95s forwards';
                    }
                    else {
                        entry.target.style.animation = 'fadeIn 1s .3s forwards';
                    }
                }
            });
        };

        let observerTeam = new IntersectionObserver(callbackTeam, options);

        targetOurTeam.forEach(el => {
        observerTeam.observe(el);
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
                    else if (entry.target.classList.contains('events__box')) {
                        entry.target.style.animation = 'fadeInLeftHero 1.1s forwards';
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