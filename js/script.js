import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

    let modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    // tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-05-31');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide:'.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current'
    });

})
