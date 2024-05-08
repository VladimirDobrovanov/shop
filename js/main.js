$(window).on('load', function () {
    setTimeout( function ()  {
     $('.preloader').fadeOut('slow');
   }, 3000); 
   });


// блокировка скролла при наведении на картинку
function disableScrollOnHover(images) {
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            // Сохраняем текущую позицию прокрутки
            document.scrollingElement._scrollY = window.scrollY;
            // Блокируем прокрутку
            document.body.style.overflow = 'hidden';
            // Устанавливаем позицию прокрутки на момент наведения
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        });

        image.addEventListener('mouseleave', () => {
            // Разблокируем прокрутку и восстанавливаем позицию прокрутки
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, document.scrollingElement._scrollY);
        });
    });
}

// Получаем все изображения с классом 'hover-image'
const images = document.querySelectorAll('.hover-image');

// Вызываем функцию для блокировки скролла на наведении для всех изображений
disableScrollOnHover(images);


// animation
window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',

})


