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
            if(window.innerWidth >= 768){
                const secondslidIdx = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1
                slidescontainer.innerHTML += slides[secondslidIdx];
                    if(window.innerWidth >= 1000){
                        const thirddslidIdx = secondslidIdx + 1>= slides.length ? 0 : secondslidIdx + 1 
                        slidescontainer.innerHTML += slides[thirddslidIdx];
                        if(window.innerWidth >= 1300){
                            const fourdslidIdx = thirddslidIdx + 1>= slides.length ? 0 :thirddslidIdx + 1 
                            slidescontainer.innerHTML += slides[fourdslidIdx];
                        }
                    }
            }

    }
    window.addEventListener('resize',renderslide);

    function nextslide(){
        currentSlideIndex ++
        if(currentSlideIndex >= slides.length){
            currentSlideIndex = 0;
        }
        renderslide()
    }

    // setInterval(nextslide,3000);

    renderslide();

    const btnNext = document.querySelector('.button__gallery__next');
    btnNext.addEventListener('click',nextslide);

    const btnPrev = document.querySelector('.button__gallery__prew');
    btnPrev.addEventListener('click',() => {
        currentSlideIndex =  currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
        renderslide();
    })

    
})();