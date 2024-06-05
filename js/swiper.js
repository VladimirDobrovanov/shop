const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
      },
      speed: 1000,
      effect: 'fade',
    // пагинация
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
    },
    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    });
  