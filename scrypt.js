'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB={
    count : numberOfFilms,
    movies : {
    },
    actors: {},
    genres: [],
    privat: false
};



function remebrMyFilms(){
    for(let i=0; i<numberOfFilms; i++){
        const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  lastFilmBull = prompt('На сколько оцените его?', '');
    
        if (lastWatchFilm != null && lastFilmBull != null && lastWatchFilm != '' && lastFilmBull != null && lastWatchFilm.length<=50){
                personalMovieDB.movies[lastWatchFilm] = lastFilmBull;
                console.log("done");
        }else{console.log("error");
              i--;
            }
    }
}

remebrMyFilms();


function detectid(){
    if(personalMovieDB.count>0 && personalMovieDB.count<=10){
        alert('Просмотрено довольно мало фильмов');
    }else if(personalMovieDB.count>10 && cpersonalMovieDB.count<=30){
        alert('Вы классический зритель');
    }else if(personalMovieDB.count>50){
        alert('Вы киноман');
    }else{alert('Произошла ошибка')};
}
 
detectid();

function showMyDB(hiden){
    if (!hiden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i=1; i<=3; i++){
        let userGenres = prompt(`Ваш любимый жанр под номером ${i} `, '')
        personalMovieDB.genres[i-1]=userGenres;
};
}

writeYourGenres();
// let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
// let lastFilmBull = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastWatchFilm] = lastFilmBull;
