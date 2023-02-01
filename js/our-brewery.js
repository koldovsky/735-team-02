(function () {

    const slides = [
        '<div><img class="our-brewery-carousel-item" src="img/dudes.png" alt="Dudes"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/barrels.png" alt="Barrels"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/bottling_line.png" alt="Bottling line"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/dude_with_a_barrel.png" alt="Dude with a barrel"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/brewing_beer.png" alt="Brewing beer"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/bottles.png" alt="Bottles"></div>'
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.our-brewery-carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                const renderedSlides = document.querySelectorAll('.our-brewery-carousel__slide-container > div');
                renderedSlides[1].classList.add('.our-brewery-carousel__slide-container--second');
            }
        }
    }
    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }
    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.our-brewery-carousel__btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.our-brewery-carousel__btn-prev');
    btnPrev.addEventListener('click', nextSlide);

    window.addEventListener('resize', renderSlides);

})();
(function () {

    
    function getRandomMessage() {
        const messages = [
            'DRUNK IN NEW YORK',
            'OLD TRADITIONS',
            'GET DRUNK AND FRAME CHICKS',
            'MODERN EQUIPMENT',
            'ATTENTION TO DETAIL'
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    const headerH1 = document.querySelector('.our-brewery__header');
    setInterval( () => headerH1.innerText = getRandomMessage(), 3000);
})();


