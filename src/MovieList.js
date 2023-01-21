import { useState, useEffect } from 'react';
import { Movie } from './App';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://6328115f5731f3db99635f14.mockapi.io/movies", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }, [])

  const deleteMovie = (id) => {
    fetch(`https://6328115f5731f3db99635f14.mockapi.io/movies/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>

      <div className='movie-list'>
        {movieList.map((mv) => (
          <Movie movie={mv} deleteButton={
            <IconButton onClick={() => deleteMovie(mv.id)}
            color="error"
            aria-label="delete">
              <DeleteIcon />
            </IconButton>} />
        ))}
      </div>
    </div>
  );

}
