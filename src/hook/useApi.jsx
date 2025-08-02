import { Api_option } from '../Rule/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../Rule/movieslice';
import { useEffect } from 'react';


function useApi(){
  const Nowplayingmovie=useSelector((store)=>store.movies.nowPlayingMovies)
const dispatch=useDispatch()
const getNowplayingMovies=()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_option)
  .then(res => res.json())
  .then(res =>  {
  
    dispatch(addNowPlayingMovies(res.results));
  })
  .catch(err => console.error(err));
}
  useEffect(()=>{
   !Nowplayingmovie && getNowplayingMovies()
 
  },[dispatch])
}

export default useApi;
