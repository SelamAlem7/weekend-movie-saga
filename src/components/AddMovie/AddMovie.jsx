import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

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
        history.push('/')

      };

    const handleCancelButton = () => {
        history.push('/')
    }







    return (
        <div>
            <input placeholder='Title' onChange={(event) => setNewTitle(event.target.value)}></input>
            <input placeholder='Movie Poster Img URL' onChange={(event) => setNewPoster(event.target.value)}></input>
            <textarea rows="10" cols="50" onChange={(event) => setNewDescription(event.target.value)}> </textarea>
            <FormControl sx={{width:200, backgroundColor:"#E1BEE7"}} >
<InputLabel>Choose a Genre</InputLabel>
            <Select  value={newGenre} onChange={(event) => setNewGenre(event.target.value)}> {genres.map((genre)=>{
                return (
                    <MenuItem value={genre.id}> {genre.name}</MenuItem>
                )
                
            })} </Select>

                    
</FormControl>   

                    <Button onClick={handleAddMovieButton}>SAVE</Button>
                    <Button onClick={handleCancelButton}>CANCEL</Button>

        </div>
    )
}


export default AddMovie;