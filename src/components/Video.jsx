import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'

import { useParams,useNavigate } from 'react-router-dom'
import { Api_option } from '../Rule/constant'

export default function Video() {
  const navigate=useNavigate()
  const {id}=useParams()

  const[videodata,setvideodata]=useState({
    name:"",
    key:"",
    published_at:'',
    type:""
  }
  )
  


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, Api_option)
  .then(res => res.json())
  .then(res => setvideodata(res.results[0]))
  .catch(err => console.error(err));

  },[])
  return (
    <>
    <div  className='h-screen flex flex-col items-center justify-between bg-black'>
    <div className='h-[90%] w-screen flex justify-center items-center '>
    <img src={back_arrow_icon} alt="back_arrow_icon" 
     className='absolute top-7 left-5 w-12 cursor-pointer'
    onClick={()=>{
    navigate(-2)
   }} 
  /> 
   <iframe width='90%' height='90%'
    src={`https://www.youtube.com/embed/${videodata.key}`}
     title='trailer' frameBorder='0' allowFullScreen
     className='rounded-t-lg h-[90%] w-[90%] '></iframe>
    
    </div>
     <div className="flex items-center justify-around text-xl h-[10%] w-screen text-white ">
      <p>{videodata.published_at.slice(0,10)}</p>
      <p>{videodata.name}</p>
      <p>{videodata.type}</p>
     </div>
     </div>
     </>
  )
}