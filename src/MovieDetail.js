import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API } from './global';

export function MovieDetail() {
  const { id } = useParams();
  console.log(useParams())

  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };
  useEffect(() => getMovie(),);
  
  const styles = {
    color: movie.rating > 8.0 ? "green" : "red",
  };
  const navigate = useNavigate();

  return (
    <div>
      <iframe width="100%" height="650" src={movie.trailer}
        title="RRR Trailer (Tamil) - NTR | Ram Charan | Ajay Devgn | Alia Bhatt | SS Rajamouli | Mar 25th 2022"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div className='MovieDetail-container'>
        <div className='Movie-specs'>
          <h3 className='Movie-name'>{movie.name} </h3>
          <p style={styles} className='Movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className='Movie-summary'>{movie.summary}</p>
        <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIcon />Back</Button>
      </div>
    </div>
  );
}
