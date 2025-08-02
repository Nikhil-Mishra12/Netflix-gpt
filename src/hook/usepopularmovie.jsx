import { Api_option } from '../Rule/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularPlayingMovies } from '../Rule/movieslice';
import { useEffect } from 'react';

function usepopularmovie() {
  const popularMovies = useSelector((store) => store.movies.PopularPlayingMovies);
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_option)
      .then(res => res.json())
      .then(res => dispatch(addPopularPlayingMovies(res.results)))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, [popularMovies, dispatch]);
}

export default usepopularmovie;