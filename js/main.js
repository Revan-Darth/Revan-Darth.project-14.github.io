window.addEventListener('resize', function () {
  if (window.innerWidth <= 992) {
    document.querySelector('.scroll-down').classList.add('visually-hidden');
    document.querySelector('.header__consultation-text').classList.add('visually-hidden');
    document.querySelector('.header__consultation-whatsapp').classList.remove('visually-hidden');
  } else {
    document.querySelector('.scroll-down').classList.remove('visually-hidden');
    document.querySelector('.header__consultation-text').classList.remove('visually-hidden');
    document.querySelector('.header__consultation-whatsapp').classList.add('visually-hidden'); 
  }
});
if (window.matchMedia("(max-width: 992px)").matches) {
    document.querySelector('.scroll-down').classList.add('visually-hidden');
    document.querySelector('.header__consultation-text').classList.add('visually-hidden');
    document.querySelector('.header__consultation-whatsapp').classList.remove('visually-hidden');

} else {
    document.querySelector('.scroll-down').classList.remove('visually-hidden');
    document.querySelector('.header__consultation-text').classList.remove('visually-hidden');
    document.querySelector('.header__consultation-whatsapp').classList.add('visually-hidden'); 
}
