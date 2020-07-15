'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let poster = document.querySelector(".promo__bg"),
    adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    ListNew = document.querySelector(".promo__interactive-list");

adv.forEach( item=>{
    item.remove();
});
genre.textContent = "ДРАМА";
poster.style.backgroundImage = 'url("img/bg.jpg")';

ListNew.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach(function (item, i) {

    ListNew.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
});
