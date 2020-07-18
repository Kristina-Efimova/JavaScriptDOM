'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        ListNew = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type = "checkbox"]');


    addForm.addEventListener("submit", (event) => {
        event.preventDefault(); // отмена стандартных действий браузера. Что бы страница по нажатию на кнопку не перезагружалась

        let newFilm = addInput.value,
            favorite = checkbox.checked;

        if (favorite){
            console.log("добавляем любимый фильм");
        }

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, ListNew);
        }
        event.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "ДРАМА";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, perent) {
        perent.innerHTML = "";
        sortArr(films);


        films.forEach(function (item, i) {
            perent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {

            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, ListNew);
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, ListNew);

});
