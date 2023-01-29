(function () {
    function getTitleMessage() {
      const titleMessages = ["Our Bear Events", "Stay closer", "Stay tuned!"];
      return titleMessages[Math.floor(Math.random() * titleMessages.length)];
    } 
    const headerH2 = document.querySelector(".our-events__title");
    headerH2.innerText = getTitleMessage();
  })();



