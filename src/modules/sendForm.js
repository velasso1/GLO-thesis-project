'use strict';

import validator from './validator';

const sendForm = () => {
    const form = document.querySelector('.rf > form');
    const inputsList = form.querySelectorAll('input');
    const phoneInput = form.querySelector('.tel');
    const status = document.createElement('div');
    const load = 'Отправка данных..';
    const errorText = 'Произошла ошибка';
    const complete = 'Данные отправлены!';
    // const button = document.querySelector('.feedback');

    const validate = () => {
        let flag = true;

        validator(inputsList);

        inputsList.forEach((input) => {
            if (input.classList.contains('error')) {
                flag = false;
            }
        });

        return flag;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        form.append(status);
        status.textContent = load;

        formData.forEach((val, item) => {
            if (item === 'tel' && val === '') {
                return;
            } else if (item === 'fio' && val === '') {
                val = 'Имя не указано';
            }

            formBody[item] = val;
        });

        if (validate()) {
            sendData(formBody).then(data => {
                status.textContent = complete;

                setTimeout(() => status.remove(), 3000);

                inputsList.forEach((input) => {
                    if (input.getAttribute('type') !== 'submit') {
                        input.value = '';
                    }

                });
            })
                .catch(error => {
                    status.textContent = errorText;
                });
        } else {
            status.textContent = 'Некорректный ввод';

            setTimeout(() => status.remove(), 3000);
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm();
    });
};

export default sendForm;