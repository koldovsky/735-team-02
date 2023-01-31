//IIFE


(function() {
    const slides = [
        // '<div class="customer_tom"></div>',
        // '<div class="customer_erica"></div>',
        // '<div class="customer_david"></div>',

        '<img class="cust-image_peterson" src="img/man_with_beer.png" alt="customer_with_beer_picture">',
        '<img class="cust-image_erica" src="img/woman.jfif" alt="customer_erica_madisson_picture">',
        '<img class="cust-image_bowman" src="img/david_bowman_pic.jpg" alt="customer_david_bowman_picture">',

    ];
        let currentSlideIdx = 0;

        function renderSlides() {
            const slideContainer = document.querySelector('.carousel__slide-container');
            slideContainer.innerHTML = slides[currentSlideIdx];
        }

        function nextSlide() {
            currentSlideIdx++;
            if (currentSlideIdx >= slides.length) currentSlideIdx=0;
            currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0: currentSlideIdx +1;
            renderSlides();
        }

        setInterval(nextSlide, 3000);
        renderSlides();
    })();