(function() {
    const timer = document.querySelector(".festival__side__clock");
    timer.innerText = ''
    
    const y = setInterval(function() {
      const endTime = new Date("2023-09-01T23:59:59");
      const startTime = new Date().getTime('uk');
      const distance = endTime - startTime;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
        clearInterval(y);
      }
        timer.innerText = "Days left: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      
    }, 1000);
    })()

   