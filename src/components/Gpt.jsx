import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'

export default function Gpt() {
  return (<>
  <div className="fixed h-screen w-screen -z-10">

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"
        alt="logo"
      />
      </div>
    <div className='pt-[30%] md:p-0'  >
        
        <Gptsearchbar/>
        <Gptmoviesuggestion/>
    </div>
  </>
    
  )
}
