(function () {

    // Створити об'єкти Events
    const events = [
      {
        id: "open-day",
        eventTitle: "OPEN DAY",
        eventPrice: "Free",
        eventDate: "AUGUST 19, 2023",
        eventText:
          "Do you want to know all the secrets of brewing? Want to understand how real craft beer is made? We will tell you, show you, and offer a free tasting.",
        button: "Book",
        eventImg: "img/our_events_bear_and_burrel.png",
        timerFor: "open-day__side__clock"
      },
      {
        id: "festival",
        eventTitle: "AUTUMN BEER FESTIVAL",
        eventPrice: "From $80",
        eventDate: "SEPTEMBER 01, 2023",
        eventText:
          "Do you want to not only enjoy beer but also have fun? We're holding a festival! The best beers, live music and fantastic atmosphere are waiting!",
        button: "Book",
        eventImg: "img/autumn_bear_festival.png",
        timerFor: "festival__side__clock"
      },
    ];

    // Заповнення масиву для подальшого відображення слайдів
    const slidesArray = [];
    function arraySlides(events) {
      for (const event of events) {
        slidesArray.push(`<div class="schedule__open-day open-day ${event.id}">
              <div class="open-day__left-side">
                      <img class="open-day__image" src="${event.eventImg}"
                          alt="${event.eventTitle}">
              </div>
                  <div class="open-day__right-side side">
                      <div class="side__content">
                          <p class="event-price">${event.eventPrice}</p>
                          <h3 class="event-title">${event.eventTitle}</h3>
                          <p class="${event.timerFor}"></p>
                          <p class="event-date">${event.eventDate}</p>
                          <p class="event-text">${event.eventText}</p>
                          <a href="#footer" class="schedule-button">${event.button}</a>
                      </div>
                      
                  </div>
          </div>`);
      }
      return slidesArray;
    }
    arraySlides(events);
  
    // Створення слайдів з масиву
    let currentSlideIdx = 0;
  
    function renderCarousel() {
      const carouselContainer = document.querySelector(".carousel");
      carouselContainer.innerHTML = slidesArray[currentSlideIdx];
    }
    function nextSlide() {
      currentSlideIdx =
        currentSlideIdx + 1 >= slidesArray.length
          ? (currentSlideIdx = 0)
          : currentSlideIdx + 1;
      renderCarousel();
    }
    setInterval(nextSlide, 4000);
    nextSlide();

  
  })();
  