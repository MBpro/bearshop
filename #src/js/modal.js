
let link = document.querySelectorAll(".modal-on");
let popup = document.querySelector('.modal-cart');
let backgroundModal = document.querySelector('.background-modal');
let buttonClose = document.querySelector('#button-close');
let bodyLock = document.querySelector('body');

for (i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add('js-modal-cart-show');
        backgroundModal.classList.add('js-background-modal-show');
        bodyLock.classList.add('body-lock');
    })
}

buttonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('js-modal-cart-show');
    backgroundModal.classList.remove('js-background-modal-show');
    bodyLock.classList.remove('body-lock');
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('js-modal-cart-show') && ('js-background-modal-show')) {
            popup.classList.remove('js-modal-cart-show');
            backgroundModal.classList.remove('js-background-modal-show');
            bodyLock.classList.remove('body-lock');
        }
    }
})


