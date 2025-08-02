import { useEffect, useRef } from "react";
import Moviecard from "./Moviecard";

export default function Movielist({ title, movies }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;  
        e.preventDefault();  
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
   
    <div >
       <h1 className="text-white md:text-xl font-bold mb-5 text-lg ">{title}</h1>

      <div
        ref={scrollRef}
        className="movie-row flex overflow-x-auto no-scrollbar space-x-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {movies?.map((movie) => (
          <Moviecard key={movie.id} poster={movie.poster_path } movie={movie} />
        ))}
      </div>
    </div>
    </>
  );
}