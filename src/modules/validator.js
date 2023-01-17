'use strict';

const validator = (items) => {
    let flag = true;

    items.forEach((item) => {
        item.classList.remove("error");

        switch (item.getAttribute("name")) {
            case "fio":
                if (!item.value.match(/[a-яA-я]{2}/gi)) {
                    item.style.border = '2px solid red';
                    break;
                } else {
                    item.style.border = '';
                    item.classList.remove("error");
                }
                return;

            case "tel":
                if (
                    !item.value.match(
                        /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
                    )
                ) {
                    item.style.border = '2px solid red';
                    break;
                } else {
                    item.style.border = '';
                    item.classList.remove("error");
                }
                return;

            default:
                return;
        }

        item.classList.add("error");
        flag = false;
    });

    return flag;
};

export default validator;