//IIFE


(function() {
    const slides = [
//         '<div class="testimonials__customer">
// <img class="cust-image_peterson" src="img/man_with_beer.png" alt="customer_with_beer_picture"><><p class="testimonials__customers customer-name">Tom Peterson</p><p class="testimonials__customers customer-quote">"I am a true beer fan and order beverages only from this brewery.
// \nI love the amazing taste of Indian Pale Ale most of all.\nThe prices are very affordable."</p><p class="testimonials__customers quote-date">December, 12 2021</p></></div>',
       

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

        //setInterval(nextSlide, 3000);
        renderSlides();

        const btnNext = document.querySelector('.carousel__btn-next');
        btnNext.addEventListener('click', nextSlide);

        const btnPrev = document.querySelector('.carousel__btn-prev');
        btnPrev.addEventListener('click', () => {
            currentSlideIdx = currentSlideIdx - 1 < 0? slides.length -1 : currentSlideIdx - 1;
            renderSlides();
        });


    })();

