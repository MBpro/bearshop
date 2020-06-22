let onJsBurger = document.querySelector('.main-nav__burger').classList.add('js-main-nav__burger');//class for styling burger button ONjs

let onJsMenuClosed = document.querySelectorAll('.main-nav__list--offjs');//menu closed ONjs
for (let i = 0; i < onJsMenuClosed.length; i++) {
    onJsMenuClosed[i].classList.add('js-main-nav__list--closed');
}

let burgerButton = document.querySelector('#toggle').onclick = function () {
    document.querySelector('.main-nav__span').classList.toggle('js-active');//hiding horizontal line ONjs
    document.querySelector('.main-nav__burger').classList.toggle('js-active');//closing icon-X ONjs

    let onJsMenuOpened = document.querySelectorAll('.main-nav__list--offjs');//menu opened ONjs
    for (let i = 0; i < onJsMenuOpened.length; i++) {
        onJsMenuOpened[i].classList.toggle('js-main-nav__list--opened');
    }
}

