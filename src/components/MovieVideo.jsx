import React from 'react'
import usemovietrailer from '../hook/usemovietrailer'

export default function MovieVideo({ movie_id }) {
  const trailerid = usemovietrailer(movie_id)

  return (
    <div className="w-screen h-screen relative">
      {trailerid && (
        <>
          
          <iframe
            className="w-screen h-screen aspect-video pointer-events-none absolute top-0 left-0 -z-10"
            src={`https://www.youtube.com/embed/${trailerid}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerid}&iv_load_policy=3`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>
        </>
      )}
    </div>
  )
}