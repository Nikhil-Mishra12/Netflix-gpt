import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import MovieVideo from './MovieVideo';

export default function Maincontainer() {
    const movie = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movie || movie.length === 0) return null;

    const mainmovie = movie[1];
        const { original_title, overview,id } = mainmovie;

    return (
        <div>
            <div className='hidden md:block'>
                 <Videotitle titles={original_title} overview={overview} movie_id={id} />

            </div>
       
            
            
            <MovieVideo movie_id={id} />
        </div>
    )
}