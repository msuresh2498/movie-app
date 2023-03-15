import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from './global';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const Addmovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer
    };
    console.log(newMovie);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers:
      {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/movies"));
  }

  //setMovieList([...movieList, newMovie]);


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

      <TextField id="filled-basic" label="trailer" variant="filled"
        onChange={(event) => setTrailer(event.target.value)}
        value={trailer} />

      <Button onClick={Addmovie} variant="contained">Add Movie</Button>
    </div>
  );
}
