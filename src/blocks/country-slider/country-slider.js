(function(){
  const countrySlider = new Swiper('.country-slider__container', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
