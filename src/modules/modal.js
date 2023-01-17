'use strict';

import { animate } from './helpers';

const modal = () => {
    const overlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const serviceElem = document.querySelector('.services-elements');
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const closeBtn = document.querySelector('img[alt="modal-close"]');
    const buttonServices = document.querySelector('.button-services');
    const btnUp = document.querySelector('.up');

    btnUp.addEventListener('click', () => console.log('нажато'));

    const changeDisplay = () => {
        if (overlay.style.display === 'none') {
            btnUp.style.zIndex = '20';
            animate({
                duration: 800,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modalCallback.style.display = 'block';
                    overlay.style.display = 'block';
                    overlay.style.opacity = progress * 100 + '%';
                    modalCallback.style.opacity = progress * 100 + '%';
                    modalCallback.style.transform = `translateX(-${150 - progress * 100}%)`;
                    modalCallback.style.left = `${50 * progress}`;
                }
            });
        } else {
            overlay.style.display = 'none';
            modalCallback.style.display = 'none';
            btnUp.style.zIndex = '';
        }
    };

    changeDisplay();

    serviceElem.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName !== 'A') { return; }

        changeDisplay();
    });

    callbackBtn.forEach((btn) => {
        btn.addEventListener('click', changeDisplay);
    });

    buttonServices.addEventListener('click', changeDisplay);

    overlay.addEventListener('click', changeDisplay);

    closeBtn.addEventListener('click', changeDisplay);
};

export default modal;