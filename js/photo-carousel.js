(function () {
    const slides = [
        '<img class="slides" src="img/four_woman_with_beer.png">',
        '<img class="slides" src="img/breaks_beer.png">',
        '<img class="slides" src="img/pour_beer.png">',
        '<img class="slides" src="img/man_drink_beer_.png">',
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

    setInterval(nextslide,1000);

    renderslide();
    
})();