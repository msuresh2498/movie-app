import { Movie } from './App';

export function MovieList({ movieList, setMovieList }) {

  return (
    <div>

      <div className='movie-list'>
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </div>
    </div>
  );

}
