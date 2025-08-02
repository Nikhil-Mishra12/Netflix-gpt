import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

export default function Gptmoviesuggestion() {
   const gpt=useSelector(store=>store.gpt)
   const {movieResults,movienames}=gpt
   if(!movienames) return null;
  return (
   
    <div className='p-4 m-4 text-white bg-black opacity-70'>
      <div>
        {
          movienames.map((movieName,index)=>(
            <Movielist
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
            />
          ))
        }
      </div>
    </div>
  )
}


