import React from 'react';


const apiHOME =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6193a0db431493626cef95cea16d4d9d&page=1";
const imgURL = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return "green"
    } else if (vote >= 6) {
        return "orange"
    } else {
        return "red"
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
    return(
    <div className='movie'>
         <img
                src={poster_path ? (imgURL + poster_path) : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                alt={title}
            />
            <div className="movie-info">
                <h3>${title}</h3>
                <span className={`vote ${setVoteClass(vote_average)}`}>
                    {vote_average}
                </span>
            </div>
            <div className="overview">
                <h3>Overview:</h3>
                <p>{overview}</p>
            </div>
    </div>
);
};

export default Movie;