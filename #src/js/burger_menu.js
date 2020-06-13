let burger = document.querySelector('#toggle').onclick = function () {
    document.querySelector('.main-nav__span').classList.toggle('active');
    document.querySelector('.main-nav__burger').classList.toggle('active');
    document.querySelector('.main-nav__wrapper').classList.toggle('active');

    let a = document.querySelectorAll('.main-nav__list--closed');
    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle('opened');
    }

    //document.querySelector('body').classList.toggle('lock');
}
