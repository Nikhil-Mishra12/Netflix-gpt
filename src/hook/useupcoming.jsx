import { Api_option } from '../Rule/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingmovie } from '../Rule/movieslice';
import { useEffect } from 'react';

function useupcoming() {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();

  const getUpcomingMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', Api_option)
      .then(res => res.json())
      .then(res => {
        dispatch(addUpcomingmovie(res.results));
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  }, [upcomingMovies, dispatch]);
}

export default useupcoming;