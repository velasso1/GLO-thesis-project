'use strict';

import validator from './validator';

const validation = () => {
    const inputName = document.querySelector('input[name="fio"]');
    const inputPhone = document.querySelector('.tel');

    inputName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я]/, '');
        validator([e.target]);
    });

    inputPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]/, '');
        validator([e.target]);
    });


};

export default validation;