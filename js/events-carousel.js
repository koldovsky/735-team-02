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
      eventImg: "img/our_events_bear_and_burrel.jpg",
      timerFor: "timer__clock",
      endTime: "2023-08-19T23:59:59",
    },
    {
      id: "festival",
      eventTitle: "AUTUMN BEER FESTIVAL",
      eventPrice: "From $80",
      eventDate: "SEPTEMBER 01, 2023",
      eventText:
        "Do you want to not only enjoy beer but also have fun? We're holding a festival! The best beers, live music and fantastic atmosphere are waiting!",
      button: "Book",
      eventImg: "img/autumn_bear_festival.jpg",
      timerFor: "timer__clock",
      endTime: "2023-09-01T23:59:59",
    },
    {
      id: "festival",
      eventTitle: "Mega Tasting - Welcome Summer",
      eventPrice: "From $20",
      eventDate: "JUNE 12, 2023",
      eventText:
        "Enter beer festivals, a fun way for curious drinkers to sample a variety of craft beers in a single day.",
      button: "Book",
      eventImg: "img/welcome-summer.jpg",
      timerFor: "timer__clock",
      endTime: "2023-06-12T23:59:59",
    }
  ];

  // Заповнення масиву для подальшого відображення слайдів
  const slidesArray = [];
  function arraySlides(events) {
    for (const event of events) {
      slidesArray.push(`<div class="schedule__schedule">
      <div class="schedule__open-day open-day ${event.id}">
              <div class="open-day__left-side">
                      <img class="open-day__image" src="${event.eventImg}"
                          alt="${event.eventTitle}">
              </div>
                  <div class="open-day__right-side side">
                      <div class="side__content">
                          <p class="event-price">${event.eventPrice}</p>
                          <h3 class="event-title">${event.eventTitle}</h3>
                          <p class="${event.timerFor}">${event.endTime}</p>
                          <p class="event-date">${event.eventDate}</p>
                          <p class="event-text">${event.eventText}</p>
                          <a href="#footer" class="schedule-button">${event.button}</a>
                      </div>
                      
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
    eventTimer(events[currentSlideIdx].timerFor);
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

  // Запуск таймера в слайді

  function eventTimer(cls) {
    const timer = document.querySelector("." + cls);
    timer.innerText = "";

    const x = setInterval(function () {
      // const endTime = new Date("2023-08-19T23:59:59");
      const endTime = new Date(events[currentSlideIdx].endTime);
      const startTime = new Date().getTime("uk");
      const distance = endTime - startTime;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
      }
      timer.innerText =
        "Days left: " +
        days +
        "d " +
        hours +
        "h " +
        minutes +
        "m " +
        seconds +
        "s ";
    }, 1000);
  }
})();