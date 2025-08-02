import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

export default function Secondcontainer() {
    const movie=useSelector((store)=>store.movies)
  return (
    movie.nowPlayingMovies && movie.PopularPlayingMovies
    && movie.topratedmovie && movie.Upcomingmovie &&(
    <div className=' bg-black  '>
        <div className='-mt-28 relative z-20  pl-12'>
       <Movielist title={"Now Playing"} movies={movie.nowPlayingMovies}/>
        <Movielist title={"Popular Playing"} movies={movie.PopularPlayingMovies}/>
        <Movielist title={"Top Rated"} movies={movie.topratedmovie}/>
       <Movielist title={"Upcoming"} movies={movie.Upcomingmovie}/>
       
        </div>
        
    </div>
    )
  )
}
