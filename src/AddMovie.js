import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { movieList } from './App';

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const Addmovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary
    };
    console.log(newMovie);

    //setMovieList([...movieList, newMovie]);
  };

  return (
    <div className='Addmovie-container'>
      <TextField id="filled-basic" label="Name" variant="filled"
        onChange={(event) => setName(event.target.value)}
        value={name} />

      <TextField id="filled-basic" label="Poster" variant="filled"
        onChange={(event) => setPoster(event.target.value)}
        value={poster} />

      <TextField id="filled-basic" label="Rating" variant="filled"
        onChange={(event) => setRating(event.target.value)}
        value={rating} />

      <TextField id="filled-basic" label="Summary" variant="filled"
        onChange={(event) => setSummary(event.target.value)}
        value={summary} />

      <Button onClick={Addmovie} variant="contained">Add Movie</Button>
    </div>
  );
}
