import { useEffect, useState } from "react";
import { Api_option } from "../Rule/constant";

const usemovietrailer=(movie_id)=>{
    const[trailerid,settrailerid]=useState(null)
    
        const getmovies=async ()=>{
            const data=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, Api_option)
            const json=await data.json();
            const filtertrailer=json.results.filter((video)=>video.type==="Trailer");
            const trailer= filtertrailer.length ? filtertrailer[0] : json.results[0];
            settrailerid(trailer.key)
        }

    useEffect(()=>{
        if(movie_id){
       getmovies()
        }
   
},[movie_id])
return trailerid;
}

export default usemovietrailer