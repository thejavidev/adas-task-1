const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('toFixed');
    } else {
        header.classList.remove('toFixed');
    }
});

const services = new Swiper('.services .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 400,
    loop: true,
    
   
    centeredSlides: true,
    navigation: {
        nextEl: '.services .swiper-button-next',
        prevEl: '.services .swiper-button-prev',
    },
    breakpoints: {
        640: {
            centeredSlides: false,
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024:{
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})

const products = new Swiper('.products .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.products .swiper-button-next',
        prevEl: '.products .swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1299: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
})
const cars = new Swiper('.cars .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.cars .swiper-button-next',
        prevEl: '.cars .swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1124:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1399: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})
const blogs = new Swiper('.blogs .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 400,
    loop: true,
    navigation: {
        nextEl: '.blogs .swiper-button-next',
        prevEl: '.blogs .swiper-button-prev',
    },
  
})

$('.header-menu-open').on('click', function (e) {
    e.preventDefault();
    $('.menu-toggler').addClass('active');
});
$('.header-menu-close').on('click', function (e) {
    e.preventDefault();
    $('.menu-toggler').removeClass('active');
});


