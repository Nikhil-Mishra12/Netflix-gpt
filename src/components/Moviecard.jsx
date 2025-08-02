import { Link } from "react-router-dom";
import { Img_cdn } from "../Rule/constant";

export default function Moviecard({ poster,movie }) {
  if(!poster) return null
  
  return (
    <div className=" w-36 md:w-48 flex-none mt-0">
      <Link to={`/video/${movie.id}`}>
      <img 
        className="w-full h-auto object-cover rounded-md"
        src={Img_cdn + poster}
        alt="Movie_card"
      />
      </Link>
      
    </div>
  )
}