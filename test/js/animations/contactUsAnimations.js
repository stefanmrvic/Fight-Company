window.addEventListener("load", (event) => {

    const mediaQueryMedium = window.matchMedia("(min-width: 1024px)");

    if(mediaQueryMedium.matches) {

        let targetFooter = document.querySelectorAll('.anim1');

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }

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


