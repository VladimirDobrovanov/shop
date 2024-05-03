const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 10000,
      },
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
  