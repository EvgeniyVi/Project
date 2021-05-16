 //1
const number_films = +prompt("How many moves have you watched?",0),
      lastFilm_one = prompt("Which did you seen last film?","Harry_Potter"),
      evaluation_one = +prompt("Rate the film",0),
      lastFilm_two = prompt("Which did you seen last film?","Harry_Potter"),
      evaluation_two = +prompt("Rate the film",0);


const personalMovieDB = {
    count: number_films,
    movies: {
        
    },
    actors:{

    },
    genres:[],
    privat:true
};

personalMovieDB.movies[lastFilm_one] = evaluation_one;
personalMovieDB.movies[lastFilm_two] = evaluation_two;
console.log(personalMovieDB);





