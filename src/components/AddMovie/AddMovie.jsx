import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function AddMovie() {
    const dispatch = useDispatch();

    let [newMovie, setNewMovie] = useState('');


    const handleAddMovieButton = () => {
        console.log('new movie is:', newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: { name, owner_id }});
      };





    return (
        <div>
            <input placeholder='Title'></input>
            <input placeholder='Movie Poster Img URL'></input>
            <textarea rows="10" cols="50"> </textarea>

            <label for="movies">Choose a genre:</label>
                    <select name="movies" id="movies">
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space</option>
                    <option value="Superhero">Superhero</option>
                    </select>

        </div>
    )
}


export default AddMovie;