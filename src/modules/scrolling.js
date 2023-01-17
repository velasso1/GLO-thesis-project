'use strict';

const scrolling = () => {

    const scrollBtns = document.querySelector('.top-menu');
    const services = document.querySelector('#services');
    const faq = document.querySelector('#faq');
    const contacts = document.querySelector('#contacts');

    const scrollTo = (elem) => {
        window.scroll({
            left: 0,
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    };


    scrollBtns.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.tagName !== 'A') {
            return;
        }

        switch (e.target.getAttribute('href')) {
            case '#services':
                scrollTo(services);
                break;

            case '#faq':
                scrollTo(faq);
                break;

            case '#contacts':
                scrollTo(contacts);
                break;

            default:
                return;
        }
    });
};

export default scrolling;