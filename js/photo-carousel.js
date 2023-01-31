(function () {
    const slides = [
        '<div class="slide__container__carousel"><img class="slides" src="img/four_woman_with_beer.png"></div>',
        '<div class="slide__container__carousel"><img class="slides" src="img/breaks_beer.png"></div>',
        '<div class="slide__container__carousel"><img class="slides" src="img/pour_beer.png"></div>',
        '<div class="slide__container__carousel"><img class="slides" src="img/man_drink_beer_.png"></div>',
    ]

    let currentSlideIndex = 0;

    function renderslide() {
        const slidescontainer = document.querySelector('.gallery__container')
        slidescontainer.innerHTML = slides[currentSlideIndex]
    }

    function nextslide(){
        currentSlideIndex ++
        if(currentSlideIndex >= slides.length){
            currentSlideIndex = 0;
        }
        renderslide()
    }

    setInterval(nextslide,3000);

    renderslide();

    const btnNext = document.querySelector('.button__gallery__next');
    btnNext.addEventListener('click',nextslide);

    const btnPrev = document.querySelector('.button__gallery__prew');
    btnPrev.addEventListener('click',() => {
        currentSlideIndex =  currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
        renderslide();
    })

    
})();