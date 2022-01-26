/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc(){

    // Calculator

    const gender = document.querySelectorAll('#gender .calculating__choose-item'),
          exercise = document.querySelectorAll('.calculating__choose_big .calculating__choose-item'),
          inputHeight = document.querySelector('#height'),
          inputWeight = document.querySelector('#weight'),
          inputAge = document.querySelector('#age');
    let idGen, idEx, height, weight, age;
    
    if (localStorage.getItem('Sex')){
        idGen = localStorage.getItem('Sex');
    } else {
        idGen = 'woman';
        localStorage.setItem('Sex', 'woman');
    }

    if (localStorage.getItem('Active')){
        idEx = localStorage.getItem('Active');
    } else {
        idEx = 'small';
        localStorage.setItem('Active', 'small');
    }

    gender.forEach((item) => {
        item.classList.remove('calculating__choose-item_active');
        if (item.getAttribute('id') === localStorage.getItem('Sex')) {
            item.classList.add('calculating__choose-item_active');
        }
    });

    exercise.forEach(item => {
        item.classList.remove('calculating__choose-item_active');
        if (item.getAttribute('id') === localStorage.getItem('Active')) {
            item.classList.add('calculating__choose-item_active');
        }
    });

    const result = document.querySelector('.calculating__result span');

    printResult();

    gender.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            gender.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
            });
            gender[index].classList.add('calculating__choose-item_active');
            idGen = e.target.getAttribute('id');
            localStorage.setItem('Sex', idGen);
            printResult();
        });
    });

    exercise.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            exercise.forEach((item) => {
                item.classList.remove('calculating__choose-item_active');
            });
            exercise[index].classList.add('calculating__choose-item_active');
            idEx = e.target.getAttribute('id');
            localStorage.setItem('Active', idEx);
            printResult();
        });
    });

    inputHeight.addEventListener('input', () => {
        if (inputHeight.value.match(/\D/g)) {
            inputHeight.style.border = 'solid 2px red';
        }
        else{
            inputHeight.style.border = 'none';
        }
        height = +inputHeight.value;
        printResult();
    });

    inputWeight.addEventListener('input', () => {
        if (inputWeight.value.match(/\D/g)) {
            inputWeight.style.border = 'solid 2px red';
        }
        else{
            inputWeight.style.border = 'none';
        }

        weight = +inputWeight.value;
        printResult();
    });

    inputAge.addEventListener('input', () => {
        if (inputAge.value.match(/\D/g)) {
            inputAge.style.border = 'solid 2px red';
        }
        else{
            inputAge.style.border = 'none';
        }
        age = +inputAge.value;
        printResult();
    });

    function printResult(){
        if (!idGen || !idEx || !height || !weight || !age) {
            result.textContent = '____';
            return;
        }

        if (height > 0 && weight > 0 && age > 0) {
            let bmr, res;
            if (idGen === 'woman') {
                switch (idEx) {
                    case 'low':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.2;
                        result.textContent = Math.floor(res);
                        break;
                    case 'small':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.375;
                        result.textContent = Math.floor(res);
                        break;
                    case 'medium':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.55;
                        result.textContent = Math.floor(res);
                        break;
                    case 'high':
                        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
                        res = bmr * 1.725;
                        result.textContent = Math.floor(res);
                        break;
                }
            }
            else if (idGen === 'man') {
                switch (idEx) {
                    case 'low':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.2;
                        result.textContent = Math.floor(res);
                        break;
                    case 'small':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.375;
                        result.textContent = Math.floor(res);
                        break;
                    case 'medium':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.55;
                        result.textContent = Math.floor(res);
                        break;
                    case 'high':
                        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
                        res = bmr * 1.725;
                        result.textContent = Math.floor(res);
                        break;
                }
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards(){

    //Classes (menu)

    class CreateMenu{
        constructor(src, altText, title, text, price, parent, ...clases){
            this.src = src;
            this.altText = altText;
            this.title = title;
            this.text = text;
            this.price = price;
            this.clases = clases;
            this.parent = parent;
            this.transfer = 27;
        }

        changeCurrency(){   
            this.price = this.price*this.transfer;
        }

        render(){
            const divMenuItem = document.createElement('div');
            if (this.clases.length == 0){
                this.divMenuItem = "menu__item";
                divMenuItem.classList.add(this.divMenuItem);
            } else{
                this.clases.forEach(className => divMenuItem.classList.add(className));
            }
            this.changeCurrency();
            divMenuItem.innerHTML = `
            <img src="${this.src}" alt="${this.altText}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            
            this.parent.append(divMenuItem);
        }
    }

    const parent = document.querySelector('.menu__field .container');

    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResources)('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new CreateMenu(img, altimg, title, descr, price, parent).render();
        });
    });

    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //         new CreateMenu(img, altimg, title, descr, price, parent).render();
    //     });
    // });

    // 2-d way

    // getResources('http://localhost:3000/menu')
    // .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         price = price*27;

    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //             <img src="${img}" alt="${altimg}">
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu__field .container').append(element);
    //     });
    // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/formServer.js":
/*!**********************************!*\
  !*** ./js/modules/formServer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function form(formSelector, modalTimerId){

    //Form Server

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        succes: 'Thanks! We will call you soon',
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            // form.append(statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.succes);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }


    // Get запрос

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json));


    
    // Остальные запросы

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: "Alex"}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));
    
    fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(json => console.log(json));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "showModal": () => (/* binding */ showModal)
/* harmony export */ });
function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflowY = 'hidden';


    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflowY = '';
}

function modal(btnsSelector, modalSelector, modalTimerId){

    // Modal

    const btns = document.querySelectorAll(btnsSelector),
          modal = document.querySelector(modalSelector),
          body = document.querySelector('body');

    btns.forEach((item) => {
        item.addEventListener('click', () => {
            showModal(modalSelector, modalTimerId);
            // modal.classList.toggle('show');
        });
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape' && modal.style.display == 'block'){
            closeModal(modalSelector);
            console.log(12);
        }
        // console.log(e.key);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == ""){
            closeModal(modalSelector);
        }
    });


    //Modal (setTimeout && scrollTop)

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    
    // Slider 1

    // const rightBut = document.querySelector('.offer__slider-next');
    // const leftBut = document.querySelector('.offer__slider-prev');
    // const images = document.querySelectorAll('.offer__slide');
    // const spanText = document.querySelector('#current');
    // const spanText2 = document.querySelector('#total');
    // console.log(spanText);
    // const all = images.length;
    // let current = 0;

    // if (all < 10) {
    //     spanText2.textContent = `0${all}`;
    // }
    // else {
    //     spanText2.textContent = all;
    // }

    // images.forEach((img) => {
    //     img.style.display = 'none';
    // });

    // images[0].style.display = 'block';

    // rightBut.addEventListener('click', () => {
    //     if (current < all-1) {
    //         current++;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    //     else {
    //         current = 0;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         spanText.textContent = `0${current+1}`;
    //     }
    // });

    // leftBut.addEventListener('click', () => {
    //     if (current > 0) {
    //         current--;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    //     else {
    //         current = all-1;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    // });



    // Slider 2 and Navigation for slider
    
    const rightBut = document.querySelector(nextArrow),
        leftBut = document.querySelector(prevArrow),
        images = document.querySelectorAll(slide),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let ind = 0,
        current = document.querySelector(currentCounter);

    slidesField.style.width = 100 * images.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    images.forEach((slide) => {
        slide.style.width = width;
    });

    const slider = document.querySelector(container);
    slider.style.position = 'relative';

    const divOfDots = document.createElement('div');
    divOfDots.classList.add('carousel-indicators');
    slider.append(divOfDots);

    const countOfSlides = images.length;

    for (let i = 0; i < countOfSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        divOfDots.append(dot);
    }

    const dots = document.querySelectorAll('.dot');
    dots[ind].style.opacity = '1';

    rightBut.addEventListener('click', () => {
        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        if (ind < images.length-1) {
            ind++;
            slidesField.style.transform = `translateX(-${25*ind}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
        else {
            ind = 0;
            slidesField.style.transform = `translateX(-${25*ind}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
    });

    leftBut.addEventListener('click', () => {
        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        if (ind > 0) {
            ind--;
            slidesField.style.transform = `translateX(-${25*(ind)}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
        else {
            ind = images.length-1;
            slidesField.style.transform = `translateX(-${25*(ind)}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach((dot) => {
                dot.style.opacity = '.5';
            });
            dots[index].style.opacity = '1';
            slidesField.style.transform = `translateX(-${25*index}%)`;
            if (index < 10) {
                current.textContent = `0${index+1}`;
            }
            else{
                current.textContent = `${index+1}`;
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){

    //Tabs

    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab =>{
            tab.classList.remove(activeClass);
        });
    }
    
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        // console.dir(e.target);

        const target = e.target;

        if (target && target.classList.contains(tabsSelector.slice(1)) ){
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline){

    //Timer

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse( new Date()),
              days = Math.trunc(t / 86400000),
              hours = Math.trunc((t-days*86400000) / 3600000)-2, 
              minutes = Math.trunc((t-days*86400000-(hours+2)*3600000) / 60000),
              seconds = Math.trunc((t-days*86400000-(hours+2)*3600000-minutes*60000) / 1000); 
        
        
        return{
            'total': t,
            'days' : days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num){
        if(num>=0 && num < 10){
            return `0${num}`;
        } else{
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              daysDoc = timer.querySelector('#days'),
              hoursDoc = timer.querySelector('#hours'),
              minutesDoc = timer.querySelector('#minutes'),
              secondsDoc = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);

            daysDoc.innerHTML = getZero(t.days);
            hoursDoc.innerHTML = getZero(t.hours);
            minutesDoc.innerHTML = getZero(t.minutes);
            secondsDoc.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResources": () => (/* binding */ getResources)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Coldn't fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_formServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formServer */ "./js/modules/formServer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");










window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.showModal)('.modal', modalTimerId), 4000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2022-06-11');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("[data-modal]", '.modal', modalTimerId);
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_formServer__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map