(function () {
    const slides = [
        `<div class="stout_container">
        <div class="stout_image-container">
            <img class="botle" src="img/imperial_stout.png" alt="Botle of stout">
        </div>
        <div class="stout_content">
            <p class="separator_bestsellers">☓ ☓ ☓</p>
            <h2 class="beer__title">Our Bestsellers</h2>
            <img width="100" class="spikelet" src="img/spikelet-separator.svg"
                alt="Spikelet separator">
            <p class="beer__gen">WHEAT MALT</p>
            <p class="beer_name">IMPERIAL STOUT</p>
            <p class="beer_about">
                A hallmark of this beer is that it is made from 8 different varieties of malt and 3
                varieties of
                hops. Thanks to this, it is possible to achieve an amazing, unique taste of strong beer.
                The
                highlight of our imperial stout is a light chocolate flavor.
            </p>
            <div class="stout_compositions">
                <div class="stout_composition_1">
                    <p class="description">Extract</p>
                    <span class="extract">18.00 %</span>
                </div>
                <div class="stout_composition_2">
                    <p class="description">Alcohol</p>
                    <span class="alcohol">18.00 %</span>
                </div>
                <div class="stout_composition_3">
                    <p class="description">IBU</p>
                    <span class="IBU">28</span>
                </div>
                <div class="stout_composition_4">
                    <p class="description">Serving temperature</p>
                    <span class="cerving">5-7 ℃</span>
                </div>
            </div>
        </div>
    </div>`,
        `<div class="indian-ale_container">
                    <div class="indian-ale_image-container">
                        <img class="botle" src="img/indian_ale.png" alt="Botle of indian ale">
                    </div>
                    <div class="indian-ale_content">
                        <p class="separator_bestsellers">☓ ☓ ☓</p>
                        <h2 class="beer__title">Our Bestsellers</h2>
                        <img width="100" class="spikelet" src="img/spikelet-separator.svg"
                            alt="Spikelet separator">
                        <p class="beer__gen">MALT</p>
                        <p class="beer_name">INDIAN PALE ALE</p>
                        <p class="beer_about">
                            The main feature of this beer is that historically it was made very strong, the strength
                            reached 12%. However, with the development of brewing, we began to move away from the
                            excessive strength, stopping at a reasonable value - 5.5-6%
                        </p>
                        <div class="indian-ale_compositions">
                            <div class="indian-ale_composition">
                                <p class="description">Extract</p>
                                <span class="extract">16.00 %</span>
                            </div>
                            <div class="indian-ale_composition">
                                <p class="description">Alcohol</p>
                                <span class="alcohol">5.7 %</span>
                            </div>
                            <div class="indian-ale_composition">
                                <p class="description">IBU</p>
                                <span class="IBU">39</span>
                            </div>
                            <div class="indian-ale_composition">
                                <p class="description">Serving temperature</p>
                                <span class="cerving">10 ℃</span>
                            </div>
                        </div>
                    </div>
                </div>`,
        `<div class="american-ale_container">
        <div class="american-ale_image-container">
            <img class="botle" src="img/american_ale.png" alt="Botle of american ale">
        </div>
        <div class="american-ale_content">
            <p class="separator_bestsellers">☓ ☓ ☓</p>
            <h2 class="beer__title">Our Bestsellers</h2>
            <img width="100" class="spikelet" src="img/spikelet-separator.svg"
                alt="Spikelet separator">
            <p class="beer__gen">FRUITY</p>
            <p class="beer_name">AMERICAN PALE ALE</p>
            <p class="beer_about">
                American pale ale is similar to Indian pale ale, but in this case, only American-made
                hops
                and malt are used. At the same time, APA is characterized by a stunning combination of
                citrus notes: grapefruit, lemon, orange, as well as hop bitterness, traditional for ale.
            </p>
            <div class="american-ale_compositions">
                <div class="american-ale_composition">
                    <p class="description">Extract</p>
                    <span class="extract">16.00 %</span>
                </div>
                <div class="american-ale_composition">
                    <p class="description">Alcohol</p>
                    <span class="alcohol">5.8 %</span>
                </div>
                <div class="american-ale_composition">
                    <p class="description">IBU</p>
                    <span class="IBU">43</span>
                </div>
                <div class="american-ale_composition">
                    <p class="description">Serving temperature</p>
                    <span class="cerving">10 ℃</span>
                </div>
            </div>
        </div>
        </div>`,
    ];
    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.carousel__bestsellers-slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    renderSlides();

    const btnNext = document.querySelector('.carousel__btn-go');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.carousel__btn-pre');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });
})();
