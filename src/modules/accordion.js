'use strict';

const accordion = () => {
    const accordion = document.querySelector('.accordeon');
    const blocks = accordion.querySelectorAll('.element');
    const contentBlock = accordion.querySelectorAll('.element-content');

    accordion.addEventListener('click', (e) => {

        if (e.target.classList.contains('title')) {

            blocks.forEach(item => { item.classList.remove('active'); });

            e.target.closest('.element').classList.add('active');

            contentBlock.forEach((item) => {
                if (item.closest('.active')) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
};

export default accordion;