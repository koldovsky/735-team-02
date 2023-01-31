//IIFE


(function() {
    const slides = [
        `<div class="testimonials__container"><div class="testimonials__customer">
        <img class="cust-image_peterson" src="img/man_with_beer.png" alt="customer_with_beer_picture">
        <p class="testimonials__customers customer-name">Tom Peterson</p>
        <p class="testimonials__customers customer-quote">
            "I am a true beer fan and order beverages only from this brewery.
            I love the amazing taste of Indian Pale Ale most of all.
            The prices are very affordable."</p>
        <p class="testimonials__customers quote-date">December, 12 2021</p>
    </div> </div>`,
        `<div class="testimonials__container"><div class="testimonials__customer">
        <img class="cust-image_erica" src="img/woman.jfif" alt="customer_erica_madisson_picture">
        <p class="testimonials__customers customer-name">Erica Madisson</p>
        <p class="testimonials__customers customer-quote">
            "I've always wondered how the craft beer is made.
            I booked a group tour with friends and I was completely delighted how everything is
            organized at
            Craft Brewery.
            Now I buy only craft beer, as it is much better than beers sold in the usual stores."
        </p>
        <p class="testimonials__customers quote-date">March, 22 2022</p>
    </div></div>`,
        `<div class="testimonials__container"><div class="testimonials__customer">
        <img class="cust-image_bowman" src="img/david_bowman_pic.jpg"
            alt="customer_david_bowman_picture">
        <p class="testimonials__customers customer-name">David Bowman</p>
        <p class="testimonials__customers customer-quote">

            "The Imperial Stout beer is amazing. I really love strong beer.
            From the very first order I have become the fan of this brewery.
            Great Taste, great prices and great venue."

        </p>
        <p class="testimonials__customers quote-date">April, 12 2022</p>
    </div></div>`,
       

        // '<img class="cust-image_peterson" src="img/man_with_beer.png" alt="customer_with_beer_picture">',
        // '<img class="cust-image_erica" src="img/woman.jfif" alt="customer_erica_madisson_picture">',
        // '<img class="cust-image_bowman" src="img/david_bowman_pic.jpg" alt="customer_david_bowman_picture">',

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

