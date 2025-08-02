import { Api_option } from '../Rule/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addtopratedmovie } from '../Rule/movieslice';
import { useEffect } from 'react';

function usetoprated() {
  const topRatedMovies = useSelector((store) => store.movies.topratedmovie);
  const dispatch = useDispatch();

  const getTopRatedMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_option)
      .then(res => res.json())
      .then(res => dispatch(addtopratedmovie(res.results)))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  }, [topRatedMovies, dispatch]);
}

export default usetoprated;