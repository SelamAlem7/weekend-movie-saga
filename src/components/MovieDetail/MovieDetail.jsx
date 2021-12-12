import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function MovieDetail() {
    const history = useHistory();
    const dispatch = useDispatch();
  

    useEffect(() => {
        dispatch({
            type: 'SET_DETAIL',
           
        })
    }, [])

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
     
        {movieDetail[0].array_agg.map((detail) => {
            return <li> {detail} </li>
        })}
    
        
        </div>
        <button onClick={handleBackToListButton}>Back To List</button>
    </div>
    )
};

export default MovieDetail