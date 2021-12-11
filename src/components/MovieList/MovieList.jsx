import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        console.log('hello hello', movies);
    }, []);

    //------------------------------------------------------------



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                <ul>
                    {movies.map(movie => {
                     <MovieItem key={movie.id} movie={movie} /> 
                })}
                </ul>
            </section>
        </main>

    );
}

export default MovieList;