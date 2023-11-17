'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '2');



let personalMovieDB={
    count : numberOfFilms,
    movies : {
    },
    actors: {},
    genres: [],
    privat: false
};

let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
let lastFilmBull = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchFilm] = lastFilmBull;

console.log(personalMovieDB);

