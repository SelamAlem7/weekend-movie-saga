import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import logger from 'redux-logger';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        console.log('hello hello', movies);
    }, []);

    //------------------------------------------------------------

    const history = useHistory();
    const handleSelectedMovie = (movie) => {
        console.log(movie, "MOVIEEEE!!");
        dispatch({
            type: 'SET_DETAIL',//need to create a saga for this
            payload: movie
        })
        history.push('/details')//details page
    }

    // return(
    //     <li key={movie.id} onClick={() => handleSelectedMovie(movie)}>
    //         movie:{movie.title} Description: {movie.description}

    //     </li>
    // )
    //------------------------------------------------------------

    const handleButton = () => {
        history.push('/AddMovie')
    }


    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleButton}> Add New Movie!</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={()=>handleSelectedMovie(movie.id)} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;