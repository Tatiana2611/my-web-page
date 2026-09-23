const Paths = document.querySelectorAll('textPath');

window.addEventListener('scroll', function() {
    const scroll = Math.min(window.scrollY, 500);

    Paths[0].setAttribute('startOffset', 200 + scroll * 0.8);
    Paths[1].setAttribute('startOffset', scroll * 0.4);
    Paths[2].setAttribute('startOffset', 120 + scroll * 0.6);
});
const Button = document.querySelector('.header__menu-btn');

const menuMobile = document.querySelector('.menu__mobile');

Button.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuMobile.classList.toggle('menu__mobile-show');
    menuMobile.classList.add('menu__mobile-transition');
}

const mobileLinks = document.querySelectorAll('.menu__mobile li a');

mobileLinks.forEach( 
    function(mobileLink) { 
      mobileLink.addEventListener("click", toggleMenu) 
    } 
  )