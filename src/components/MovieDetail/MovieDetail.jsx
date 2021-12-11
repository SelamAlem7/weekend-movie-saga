import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetail() {

    const movieDetail = useSelector(store => store.selectedMovie);
    console.log(movieDetail);

    





    return(

        <div>
         {movieDetail[0].title}
         
        <img src={movieDetail[0].poster}/>      
       
        {movieDetail[0].description}

        </div>

    )
};

export default MovieDetail