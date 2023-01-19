'use strict';

import { animate } from './helpers';

export const slider = () => {
    const sliderItem = document.querySelectorAll('.item');
    const itemText = document.querySelectorAll('.table');
    const title = document.querySelectorAll('.table-cell');

    let count = 0;

    const showItem = () => {

        sliderItem.forEach((item) => { item.classList.remove('active'); });

        sliderItem[count].classList.add('active');

        title.forEach((item) => {
            item.style.opacity = '0';

            animate({
                duration: 900,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    item.style.opacity = progress * 100 + '%';
                }
            });
        });

        sliderItem.forEach((item) => {
            if (!item.classList.contains('active')) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
                itemText[count].style.visibility = 'visible';
                itemText[count].style.opacity = '1';
            }
        });

        count++;

        if (count > 2) {
            count = 0;
        }
    };

    showItem();

    setInterval(() => {
        showItem();
    }, 3000);
};