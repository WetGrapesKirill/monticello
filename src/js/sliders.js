import Swiper from 'swiper';

export default function () {

    new Swiper('.header__slider-container', {
        speed: 700,
        slidesPerView: 1,
        loop: true,
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 4000,
        }
    });

    new Swiper('.news__slider-container', {
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.news__slide-arrow-next',
            prevEl: '.news__slide-arrow-prev',
        },
        autoplay: {
            delay: 4000,
        },
        parallax: true,
        breakpoints: {
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 1,
            },

            991: {
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
                spaceBetween: 15,
                slidesPerView: 3,
                slidesPerGroup: 1,
            },

            768: {
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 2,
                spaceBetween: 40,
                slidesPerGroup: 1,
            },

            576: {
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 1,
                spaceBetween: 20,
            },

            430: {
                centeredSlides: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 1,
                spaceBetween: 20,
            },

            319: {
                centeredSlides: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
}    
