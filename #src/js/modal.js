
let link = document.querySelector("#modal-on");
let popup = document.querySelector('.modal-cart');
let backgroundModal = document.querySelector('.background-modal');
let buttonClose = document.querySelector('#button-close');
let bodyLock = document.querySelector('body');

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('js-modal-cart-show');
    backgroundModal.classList.add('js-background-modal-show');
    bodyLock.classList.add('body-lock');
})

buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('js-modal-cart-show');
    backgroundModal.classList.remove('js-background-modal-show');
    bodyLock.classList.remove('body-lock');
})

