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

    let [newTitle, setNewTitle] = useState('');
    let [newDescription, setNewDescription] = useState('');
    let [newPoster, setNewPoster] = useState('');
    let [newGenre, setNewGenre] = useState('');




    const genres = useSelector((store) => store.genres);
      console.log('all genres here', genres);


    const handleAddMovieButton = () => {
        console.log('new movie is:', newTitle,newDescription,newPoster, newGenre  );

        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: newTitle,
                description: newDescription,
                poster: newPoster,
                genre_id: newGenre
            }
            
        })





        
      };

    const handleCancelButton = () => {
        history.push('/')
    }







    return (
        <div>
            <input placeholder='Title' onChange={(event) => setNewTitle(event.target.value)}></input>
            <input placeholder='Movie Poster Img URL' onChange={(event) => setNewPoster(event.target.value)}></input>
            <textarea rows="10" cols="50" onChange={(event) => setNewDescription(event.target.value)}> </textarea>

            <label>Choose a genre:</label>
            <select onChange={(event) => setNewGenre(event.target.value)}> {genres.map((genre)=>{
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