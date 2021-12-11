import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
        })
      }, []);

    let [newMovie, setNewMovie] = useState('');

    const genres = useSelector((store) => store.genres);
      console.log('all genres here', genres);


    const handleAddMovieButton = () => {
        console.log('new movie is:', newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: { newMovie, owner_id }});
      };

    const handleCancelButton = () => {
        history.push('/')
    }







    return (
        <div>
            <input placeholder='Title'></input>
            <input placeholder='Movie Poster Img URL'></input>
            <textarea rows="10" cols="50"> </textarea>

            <label>Choose a genre:</label>
            <select> {genres.map((genre)=>{
                return (
                <option value={genre.id}> {genre.name}</option>
                )
                
            })} </select>

                    
                    

                    <button onClick={handleAddMovieButton}>SAVE</button>
                    <button onClick={handleCancelButton}>CANCEL</button>

        </div>
    )
}


export default AddMovie;