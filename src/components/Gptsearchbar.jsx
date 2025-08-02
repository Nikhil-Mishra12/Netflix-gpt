import React, { useRef } from 'react'

import openai from '../Rule/openai';
import { Api_option } from '../Rule/constant';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../Rule/gptslice';

export default function Gptsearchbar() {
  const dispatch=useDispatch()

  const searchtext=useRef()

  const searchMovieTMDB= async (movie)=>{
const data=awaitfetch("https://api.themoviedb.org/3/search/movie?query="+
   movie+
  "&include_adult=false&language=en-US&page=1", Api_option
)
const json=await data.json()
  return json.results;
  
  }

  async function handlegptsearch(){
    const gptquery="Act as a Movie Recomandation system and suggest movie for the query:"
    +searchtext.current.value+
    'only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Iron-Man1,Bhoot,Marvels,Captain America'
const gptResults = await openai.chat.completions.create({
  messages:[{role:"user",content:gptquery}],
  model:'gpt-3.5-turbo',
});

//if(!gptResults.choices)
console.log(gptResults.choices[0]?.message?.content);
const gptmovies=gptResults.choices[0]?.message?.content.split(",")

const promiseArray=gptmovies.map((movie)=>searchMovieTMDB(movie));
const tmdbResults=await Promise.all(promiseArray)
console.log(tmdbResults)
dispatch(addGptMovies({movienames:gptmovies,movieResults:tmdbResults}));
  }

  return (
    <div className='pt-[20%] md:pt-[15%] flex justify-center'>
        <form className=' bg-black md:w-1/2 grid grid-cols-12 w-full' onSubmit={(e)=>{
          e.preventDefault();
        }}>

            <input type="text" ref={searchtext}
            className='p-4 m-4 col-span-9' placeholder='What you like to watch today' />

            <button 
            onClick={handlegptsearch}
            className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>
                Search</button>
        </form>
    </div>
  )
}
