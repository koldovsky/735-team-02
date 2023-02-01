// Зміна назви по черзі

(function () {
  const titleMessages = ["Our Bear Events", "Stay closer", "Stay tuned!"];
  let currentMessageIndx = 0;

  function getTitleMessage() {
    const headerH2 = document.querySelector(".our-events__title");
    headerH2.innerText = titleMessages[currentMessageIndx];
  }

  function nextMessage() {
    currentMessageIndx =
      currentMessageIndx + 1 >= titleMessages.length
        ? (currentMessageIndx = 0) : currentMessageIndx + 1;
    getTitleMessage();
  }

  setInterval(nextMessage, 2000);
  getTitleMessage();
})()

// Рандомна зміна Заголовку блоку Events

// (function () {
//     function getTitleMessage() {
//       const titleMessages = ["Our Bear Events", "Stay closer", "Stay tuned!"];
//       return titleMessages[Math.floor(Math.random() * titleMessages.length)];
//     } 
//     const headerH2 = document.querySelector(".our-events__title");
//     headerH2.innerText = getTitleMessage();
// })()
