'use strict';

import Swiper, { Navigation } from 'swiper';

export const carousel = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        modules: [Navigation],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });
};

