(function () {
    const slides = [
        '<div class="slide__container__carousel "><img class="slides carousel_1" src="img/carousel_1.png"></div>',
        '<div class="slide__container__carousel "><img class="slides carousel_2" src="img/carousel_2.png"></div>',
        '<div class="slide__container__carousel "><img class="slides carousel_3" src="img/carousel_3.png"></div>',
        '<div class="slide__container__carousel "><img class="slides carousel_4" src="img/carousel_4.png"></div>',
        '<div class="slide__container__carousel "><img class="slides carousel_5" src="img/carousel_5.png"></div>',
    ]

    let currentSlideIndex = 0;

    function renderslide() { 
        if(window.innerWidth >= 160){
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

    const btnPrev = document.querySelector('.button__gallery__prev');
    btnPrev.addEventListener('click',() => {
        currentSlideIndex =  currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
        renderslide();
    })
})();
(function(){
    function zoom(){
        document.querySelectorAll('.carousel_1 , .carousel_2 , .carousel_3 , .carousel_4, .carousel_5').forEach(item => {
            item.addEventListener('mouseover', event => {
                item.classList.add('opened')
            } )
        }) }
    setInterval(zoom,1);
})();