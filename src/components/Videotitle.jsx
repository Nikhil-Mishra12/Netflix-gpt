import React from 'react'

export default function Videotitle({ titles, overview }) {
  return (
    <div className="w-screen  aspect-video  absolute top-0 text-white overflow-hidden ">

      
      <div className="absolute top-0 left-0 h-full w-2/5 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

      
      <div className="relative z-10 px-12 md:px-20 mt-[18%] max-w-xl">
       
        <h1 className="text-white text-4xl font-bold px-6 mb-2">
          {titles}
        </h1>

        
        <p className="py-4 md:py-6 text-base md:text-md leading-relaxed opacity-90 ">
          {overview}
        </p>

        <div className="flex space-x-4 -mt-4">
          <button className="flex items-center gap-2 p-2 px-8 md:px-12 text-black text-lg font-semibold rounded-md bg-white hover:bg-opacity-90 transition duration-300 shadow-md">
        <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 5v14l11-7z"/>
</svg>
      Play
          </button>
          <button className=" flex items-center gap-2 p-2 px-4 md:px-12 text-white text-lg font-semibold bg-gray-500 bg-opacity-70 rounded-md hover:bg-opacity-90 transition duration-300">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437-1.166 3.737-1.166 1.473 0 2.571.935 2.571 2.207 0 1.635-1.437 2.295-2.419 2.902-.371.234-.654.479-.906.705-.331.32-.619.645-.92.997a.75.75 0 1 1-1.04-1.085c.388-.372.688-.689.941-.962.387-.42.662-.772.847-1.08.384-.624.63-1.01.63-1.528 0-.79-.54-1.207-1.426-1.207-.665 0-1.37.31-2.004.681a.75.75 0 1 1-.71-1.35Z" clipRule="evenodd" />
    <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
  </svg>
   More Info
          </button>
        </div>
      </div>
    </div>
  )
}