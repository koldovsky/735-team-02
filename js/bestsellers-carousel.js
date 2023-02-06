(function () {
    const slides = [
        `<div class="bestsellers-info">
             <div class="bestsellers-info--img">
                 <img class="botle" src="img/imperial_stout.png" alt="Botle of stout"/>
             </div>
                <div class="bestsellers-info-content">
                  <p class="bestsellers-info-headline">☓ ☓ ☓</p>
                  <h2 class="bestsellers-info-content-title">Our Bestsellers</h2>
                  <div class="bestsellers-info-content-icon">
                    <img width="100" class="spikelet" src="img/spikelet-separator.svg"/>
                  </div>
                  <p class="bestsellers-info-content-type">WHEAT MALT</p>
                  <p class="bestsellers-info-content-subtitle">IMPERIAL STOUT</p>
                  <p class="bestsellers-info-content-about">
                    A hallmark of this beer is that it is made from 8 different
                    varieties of malt and 3 varieties of hops. Thanks to this,
                    it is possible to achieve an amazing, unique taste of strong
                    beer. The highlight of our imperial stout is a light
                    chocolate flavor.
                  </p>
                  <div class="bestsellers-info-content-details">
                    <div class="bestsellers-info-content-details--elem">
                      <p>Extract</p>
                      <span>18.00 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Alcohol</p>
                      <span>18.00 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>IBU</p>
                      <span>28</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Serving temperature</p>
                      <span>5-7 ℃</span>
                    </div>
                  </div>
                </div>
              </div>`,
        `<div class="bestsellers-info">
                <div class="bestsellers-info--img">
                  <img class="botle" src="img/indian_ale.png" alt="Botle of indian ale"/>
                </div>
                <div class="bestsellers-info-content">
                  <p class="bestsellers-info-headline">☓ ☓ ☓</p>
                  <h2 class="bestsellers-info-content-title">Our Bestsellers</h2>
                  <div class="bestsellers-info-content-icon">
                    <img width="100"class="spikelet" src="img/spikelet-separator.svg"/>
                  </div>
                  <p class="bestsellers-info-content-type">MALT</p>
                  <p class="bestsellers-info-content-subtitle">INDIAN PALE ALE</p>
                  <p class="bestsellers-info-content-about">
                  The main feature of this beer is that historically it was made very strong,
                  the strength reached 12%. However, with the development of brewing, we began to move
                  away from the excessive strength, stopping at a reasonable value - 5.5-6%</p>
                  <div class="bestsellers-info-content-details">
                    <div class="bestsellers-info-content-details--elem">
                      <p>Extract</p>
                      <span>16.00 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Alcohol</p>
                      <span>5.7 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>IBU</p>
                      <span>39</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Serving temperature</p>
                      <span>10 ℃</span>
                    </div>
                  </div>
                </div>
              </div>`,
        `<div class="bestsellers-info">
                <div class="bestsellers-info--img">
                  <img class="botle" src="img/american_ale.png"alt="Botle of american ale"/>
                </div>
                <div class="bestsellers-info-content">
                  <p class="bestsellers-info-headline">☓ ☓ ☓</p>
                  <h2 class="bestsellers-info-content-title">Our Bestsellers</h2>
                  <div class="bestsellers-info-content-icon">
                    <img width="100" class="spikelet" src="img/spikelet-separator.svg"/>
                  </div>
                  <p class="bestsellers-info-content-type">FRUITY</p>
                  <p class="bestsellers-info-content-subtitle">AMERICAN PALE ALE</p>
                  <p class="bestsellers-info-content-about">
                  American pale ale is similar to Indian pale ale, but in this case, only American-made
                  hops and malt are used. At the same time, APA is characterized by a stunning combination of 
                  citrus notes: grapefruit, lemon, orange, as well as hop bitterness, traditional for ale.
                  </p>
                  <div class="bestsellers-info-content-details">
                    <div class="bestsellers-info-content-details--elem">
                      <p>Extract</p>
                      <span>16.00 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Alcohol</p>
                      <span>5.8 %</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>IBU</p>
                      <span>43</span>
                    </div>
                    <div class="bestsellers-info-content-details--elem">
                      <p>Serving temperature</p>
                      <span>10 ℃</span>
                    </div>
                  </div>
                </div>
              </div>`,
    ];
    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.bestsellers__carousel--slider');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }

    renderSlides();

    const btnNext = document.querySelector('.bestsellers__carousel--nav-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.bestsellers__carousel--nav-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });
})();