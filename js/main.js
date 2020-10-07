const Paths =
document.querySelectorAll('textPath');

window.addEventListener('scroll', function(){
    Paths[0].setAttribute('startOffset', window.scrollY * 0.8);
    Paths[1].setAttribute('startOffset', window.scrollY *0.4);
    Paths[2].setAttribute('startOffset', window.scrollY *0.6);
})

const Button = document.querySelector('.header__menu-btn');

const menuMobile = document.querySelector('.menu__mobile');

Button.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuMobile.classList.toggle('menu__mobile-show');
}