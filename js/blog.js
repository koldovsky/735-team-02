// Random Text
(function () {
    function getRandomMessage () {
        const messages = [
            'No blog posts yet...',
            'Learn more about beer',
            'Read and chill',
            'Till our new post:'
        ];

       return messages[Math.floor(Math.random() * messages.length)];
    }
    const blogText = document.querySelector('.articles__text');
    setInterval ( () => blogText.innerText = getRandomMessage (), 3000);
    
}) ();
// Countdown
(function (){
    const timer = document.querySelector(".countdown ");
    timer.innerText = '';

    const y = setInterval (function () {
        const endTime = new Date("2023-04-05T15:10:10");
        const startTime = new Date().getTime('uk');
        const distance = endTime - startTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor ((distance % ( (1000 * 60)) / 1000));
       if (distance < 0) {
        clearInterval(y);
       }
       timer.innerText = "Our new post: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      
    }, 1000);
    
    }) ();