import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Display a single Pet 
function MovieItem({ movie }) {  
    const dispatch = useDispatch();
    const history = useHistory();
  console.log(movie, 'movie is')
    const handleSelectMovie = (movie) => {
      // store selected movie object in Redux
      dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
      // go to details view
      history.push('/details');
    };
  
    return (
      <li key={movie.id} onClick={() => handleSelectMovie(movie)}>
        movie:{movie.title} {movie.poster}
      </li>
    );
  }
  
  export default MovieItem;
  