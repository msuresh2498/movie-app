
import { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { intial_MOVIELIST } from './intial_MOVIELIST';
import { Routes, Route, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {AddMovie} from './AddMovie'
import { MovieList } from './MovieList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Home, NotFound } from './Home';
import { BasicForm } from './BasicForm';


export const movieList = intial_MOVIELIST;



export function Movie( {movie}){

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

function App() {
  const [movieList, setMovieList] = useState(intial_MOVIELIST)
  const navigate = useNavigate()

  const [mode, setMode] = useState('dark')

    const themeCtx = createTheme({
      palette: {
        mode: mode,
      },
    }); 


    fetch("https://6328115f5731f3db99635f14.mockapi.io/movies")
    .then((data) =>data.json())
    .then((mvs)=> console.log(mvs));


  return (
    <ThemeProvider theme={themeCtx}>
      <Paper elevation={4}>
    <div className="App">

      <AppBar className='AppBar' position="static">
        <Toolbar>

          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>

          <Button color="inherit" onClick={() => navigate("/movie/add")}>
            AddMovies
          </Button>

          <Button 
          sx = {{
            marginLeft: "auto",
          }}
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? "dark" : "light"} mode
          </Button>

        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MovieList movieList ={movieList} setMovieList={setMovieList} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/movie/add' element={<AddMovie movieList ={movieList} setMovieList={setMovieList} />} />
        <Route path='/basic-form' element={<BasicForm />} />
      </Routes>
      
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
