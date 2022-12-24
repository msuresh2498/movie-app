
import { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { intial_MOVIELIST } from './intial_MOVIELIST';
import { Routes, Route, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { AddMovie } from './AddMovie';


export const movieList = intial_MOVIELIST;


function Movie( {movie}){

  const styles = {
    color: movie.rating > 8.0 ? "green":"red",
  };
  const [show, setShow] = useState(true);  


return (   
    <Card className='Movie-container'>
        <img src={movie.poster} alt='' className='Movie-poster'/>
      <CardContent>
        <div className='Movie-specs'>
            <h3 className='Movie-name'>{movie.name}
                <IconButton onClick={() => setShow( !show)} aria-label="Expand" color='primary'>
                { show ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
                </IconButton>             
            </h3>
            <p style={styles} className='Movie-rating'>⭐{movie.rating}</p>
        </div>
        {show ? <p className='Movie-summary'>{movie.summary}</p>: null}
      </CardContent>
        <CardActions>
          <Counter />
        </CardActions>
    </Card>

);
}

function MovieList ({ movieList, setMovieList }) {
 
  return(
      <div>
        
        <div className='movie-list'>
          {movieList.map((mv)=>(
          <Movie movie ={mv} />
          ))}
      </div>
      </div>
  )

}


function NotFound() {
  return(
    <div>
    <img className='notfound' src="https://cdn.dribbble.com/users/2399102/screenshots/10579506/media/bcd1211375b29ae022039e52b2dd7734.mp4" alt="not found" />
    <h1>404 Not Found</h1>
    </div>
  )
}

function Home() {
  return(
  <div className='HomePage'>Welcome to the Movie App🎉🎉</div>  
  )
}


function App() {
  const [movieList, setMovieList] = useState(intial_MOVIELIST)
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/movies">Movies</Link>
        </li>
        <li>
        <Link to="/movies/add">AddMovies</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MovieList movieList ={movieList} setMovieList={setMovieList} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/movie/add' element={<AddMovie />} />
      </Routes>
      
    </div>
  );
}

export default App;
