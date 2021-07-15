const elon = document.querySelector('.intro__img');
const elips = document.querySelector('.intro__el');
const title = document.querySelector('.intro__title');
const btn = document.querySelector('.intro__btn');

const tl = new TimelineMax();

tl.fromTo(elon, 0.8, { transform: 'scale(0)', opacity: '0' }, { transform: 'scale(1)', opacity: '1', ease: Power2.easeInOut })
  .fromTo(elips, 1.2, { transform: 'scale(0)', opacity: '0' }, { transform: 'scale(1)', opacity: '1', ease: Power2.easeInOut })
  .fromTo(title, 1.2, { opacity: '0', transform: 'translateX(100%)' }, { opacity: '1', transform: 'translateX(0)', ease: Power2.easeInOut }, '-=1.2')
  .fromTo(btn, 0.3, { opacity: '0' }, { opacity: '1', ease: Power2.easeInOut })