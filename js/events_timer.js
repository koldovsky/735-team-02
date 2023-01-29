(function () {
    const timer = document.querySelector(".open-day__side__clock");
    timer.innerText = ''
    
    const x = setInterval(function () {
      const endTime = new Date("2023-08-19T23:59:59");
      const startTime = new Date().getTime('uk');
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
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      
    }, 1000);
   
    })();

    (function(){
      const timer = document.querySelector(".festival__side__clock");
    timer.innerText = ''
    
    const x = setInterval(function () {
      const endTime = new Date("2023-09-01T23:59:59");
      const startTime = new Date().getTime();
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
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      
    }, 1000);
    })()
  