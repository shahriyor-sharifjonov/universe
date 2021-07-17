const elon = document.querySelector('.intro__img');
const elips = document.querySelector('.intro__el');
const title = document.querySelector('.intro__title');
const btn = document.querySelector('.intro__btn');
const logo = document.querySelector('.logo');
const link1 = document.querySelector('.link-1');
const link2 = document.querySelector('.link-2');
const link3 = document.querySelector('.link-3');
const link4 = document.querySelector('.link-4');
const link5 = document.querySelector('.link-5');
const lang = document.querySelector('.header__lang');
const headerBtn = document.querySelector('.header__btn');

const tl = new TimelineMax();

tl.fromTo(elon, 0.8, { transform: 'scale(0)', opacity: '0' }, { transform: 'scale(1)', opacity: '1', ease: Power2.easeInOut })
  .fromTo(elips, 1.2, { transform: 'scale(0)', opacity: '0' }, { transform: 'scale(1)', opacity: '1', ease: Power2.easeInOut })
  .fromTo(title, 1.2, { opacity: '0', transform: 'translateX(100%)' }, { opacity: '1', transform: 'translateX(0)', ease: Power2.easeInOut }, '-=1.2')
  .fromTo(btn, 0.5, { opacity: '0', x: 30}, { opacity: '1', x: 0, ease: Power2.easeInOut }, '-=0.5')
  .fromTo(logo, .5, { opacity: '0', x: 30}, { opacity: '1', x: 0, ease: Power2.easeInOut }, '-=0.5')
  .fromTo(link1, .6, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=1.2')
  .fromTo(link2, .7, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=1.1')
  .fromTo(link3, .8, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=1')
  .fromTo(link4, .9, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=0.9')
  .fromTo(link5, 1, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=0.8')
  .fromTo(headerBtn, 0.3, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=0.7')
  .fromTo(lang, 0.3, { opacity: '0', y: 30}, { opacity: '1', y: 0, ease: Power2.easeInOut }, '-=0.6')
  

  document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".parallax").forEach(function(move){

      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }


const headerButton: HTMLButtonElement =
document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};