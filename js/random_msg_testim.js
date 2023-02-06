(function () {
  

    function getRandomMessage() {
      const messages = [
      'Testimonials',
      'Enjoy Beer',
      'What We Work For',
      "Lets Party"
    ];
      return messages[Math.floor(Math.random() * messages.length)];
  
      
    }
    
    const headerh1 = document.querySelector('.testimonials__title');
    
    // headerh1.innerText = getRandomMessage();
    setInterval( () => headerh1.innerText = getRandomMessage(), 1000);
  })();