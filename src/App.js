
import { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { intial_MOVIELIST } from './intial_MOVIELIST';


const movieList = intial_MOVIELIST;


function Movie( {movie}){

  const styles = {
    color: movie.rating > 8.0 ? "green":"red",
  };
  const [show, setShow] = useState(true);  


return (   
    <div className='Movie-container'>
        <img src={movie.poster} alt='' className='Movie-poster'/>
        <div className='Movie-specs'>
            <h3 className='Movie-name'>{movie.name}</h3>
            <p style={styles} className='Movie-rating'>⭐{movie.rating}</p>
        </div>
        <button onClick={() => setShow( !show)}>Toggle summary</button>
        {show ? <p className='Movie-summary'>{movie.summary}</p>: null}
        <Counter />
        
    </div>

);
}

function MovieList ({ movieList, setMovieList }) {
  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")
  const Addmovie = () => {
   const newMovie= {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary
  };
  console.log(newMovie)

  setMovieList([...movieList, newMovie])
}
  return(
      <div>
        <div className='Addmovie-container'>
            <input type="text" placeholder='Name' 
              onChange={(event) => setName(event.target.value)}
              value={name} />
            <input type="text" placeholder='Poster'
              onChange={(event) => setPoster(event.target.value)}
              value={poster}  />
            <input type="text" placeholder='Rating'  
              onChange={(event) => setRating(event.target.value)}
              value={rating} />
            <input type="text" placeholder='Summary' 
              onChange={(event) => setSummary(event.target.value)}
              value={summary} />
            <button onClick={Addmovie}>Add Movie</button>
        </div>
        <div className='movie-list'>
          {movieList.map((mv)=>(
          <Movie movie ={mv} />
          ))}
      </div>
      </div>
  )

}




function App() {
  const [movieList, setMovieList] = useState(intial_MOVIELIST)
  return (
    <div className="App">
      <MovieList movieList ={movieList} setMovieList={setMovieList} />
    </div>
  );
}

export default App;
