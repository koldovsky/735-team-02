document.addEventListener('DOMContentLoaded', () => {  
 
    let callBackButton = document.getElementById('callback-button');
   
    let modal1 = document.getElementById('modal-1');
   
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
   
    let tagBody = document.getElementsByTagName('body');
   
    callBackButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
   
    closeButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
   
    modal1.onmousedown = function (e) {
      let target = e.target;
      let modalContent = modal1.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };
   
  });