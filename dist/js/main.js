/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n// import validator from './modules/validator';\r\n\r\n\r\n\r\n// validator();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = function ({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) {\r\n            timeFraction = 1;\r\n        }\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n    const overlay = document.querySelector('.modal-overlay');\r\n    const modalCallback = document.querySelector('.modal-callback');\r\n    const serviceElem = document.querySelector('.services-elements');\r\n    const callbackBtn = document.querySelectorAll('.callback-btn');\r\n    const closeBtn = document.querySelector('img[alt=\"modal-close\"]');\r\n    const buttonServices = document.querySelector('.button-services');\r\n\r\n    const changeDisplay = () => {\r\n        if (overlay.style.display === 'none') {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 800,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modalCallback.style.display = 'block';\r\n                    overlay.style.display = 'block';\r\n                    overlay.style.opacity = progress * 100 + '%';\r\n                    modalCallback.style.opacity = progress * 100 + '%';\r\n                    modalCallback.style.transform = `translateX(-${150 - progress * 100}%)`;\r\n                    modalCallback.style.left = `${50 * progress}`;\r\n                }\r\n            });\r\n        } else {\r\n            overlay.style.display = 'none';\r\n            modalCallback.style.display = 'none';\r\n        }\r\n    };\r\n\r\n    changeDisplay();\r\n\r\n    serviceElem.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (e.target.tagName !== 'A') { return; }\r\n\r\n        changeDisplay();\r\n    });\r\n\r\n    callbackBtn.forEach((btn) => {\r\n        btn.addEventListener('click', changeDisplay);\r\n    });\r\n\r\n    buttonServices.addEventListener('click', changeDisplay);\r\n\r\n    closeBtn.addEventListener('click', changeDisplay);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./modules/validator.js\");\n\r\n\r\n\r\n\r\nconst sendForm = () => {\r\n    const form = document.querySelector('.rf > form');\r\n    const inputsList = form.querySelectorAll('input');\r\n    const phoneInput = form.querySelector('.tel');\r\n    const status = document.createElement('div');\r\n    const load = 'Отправка данных..';\r\n    const errorText = 'Произошла ошибка';\r\n    const complete = 'Данные отправлены!';\r\n    // const button = document.querySelector('.feedback');\r\n\r\n    const validate = () => {\r\n        let flag = true;\r\n\r\n        (0,_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputsList);\r\n\r\n        inputsList.forEach((input) => {\r\n            if (input.classList.contains('error')) {\r\n                flag = false;\r\n            }\r\n        });\r\n\r\n        return flag;\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                'Content-type': 'application/json'\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        form.append(status);\r\n        status.textContent = load;\r\n\r\n        formData.forEach((val, item) => {\r\n            if (item === 'tel' && val === '') {\r\n                return;\r\n            } else if (item === 'fio' && val === '') {\r\n                val = 'Имя не указано';\r\n            }\r\n\r\n            formBody[item] = val;\r\n        });\r\n\r\n        if (validate()) {\r\n            sendData(formBody).then(data => {\r\n                status.textContent = complete;\r\n\r\n                setTimeout(() => status.remove(), 3000);\r\n\r\n                inputsList.forEach((input) => {\r\n                    if (input.getAttribute('type') !== 'submit') {\r\n                        input.value = '';\r\n                    }\r\n\r\n                });\r\n            })\r\n                .catch(error => {\r\n                    status.textContent = errorText;\r\n                });\r\n        } else {\r\n            status.textContent = 'Некорректный ввод';\r\n\r\n            setTimeout(() => status.remove(), 3000);\r\n        }\r\n    };\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        submitForm();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validator = (items) => {\r\n    let flag = true;\r\n\r\n    items.forEach((item) => {\r\n        item.classList.remove(\"error\");\r\n\r\n        switch (item.getAttribute(\"name\")) {\r\n            case \"fio\":\r\n                if (!item.value.match(/[a-яA-я]{2}/gi)) {\r\n                    item.style.border = '2px solid red';\r\n                    break;\r\n                } else {\r\n                    item.style.border = '';\r\n                    item.classList.remove(\"error\");\r\n                }\r\n                return;\r\n\r\n            case \"tel\":\r\n                if (\r\n                    !item.value.match(\r\n                        /^((\\+7|7|8)+\\(?([0-9]){3}\\)?)(\\-?([0-9]){3})(\\-?([0-9]){2}){2}$/g\r\n                    )\r\n                ) {\r\n                    item.style.border = '2px solid red';\r\n                    break;\r\n                } else {\r\n                    item.style.border = '';\r\n                    item.classList.remove(\"error\");\r\n                }\r\n                return;\r\n\r\n            default:\r\n                return;\r\n        }\r\n\r\n        item.classList.add(\"error\");\r\n        flag = false;\r\n    });\r\n\r\n    return flag;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;