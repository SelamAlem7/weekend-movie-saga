import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetail() {
    const history = useHistory();

    const movieDetail = useSelector(store => store.selectedMovie);
    console.log('movie detail:', movieDetail);

    const handleBackToListButton = () => {
        history.push('/')
    }

    // const getGenres = () => {
    //     dispatch({
    //         type:
    //         payload:
    //     })
    // }

    





    return(
    <div>
        <div>

        <img src={movieDetail[0].poster} alt={movieDetail[0].title}/>
        </div>

        <div>
        {movieDetail[0].description}
        {movieDetail[0].genres}
        </div>
        <button onClick={handleBackToListButton}>Back To List</button>
    </div>
    )
};

export default MovieDetail