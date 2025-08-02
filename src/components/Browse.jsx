import React, { useEffect, useState } from 'react'
import Header from './Header'
import useApi from '../hook/useApi'
import Maincontainer from './Maincontainer'
import Secondcontainer from './Secondcontainer'
import usepopularmovie from '../hook/usepopularmovie'
import usetoprated from '../hook/usetoprated'

import useupcoming from '../hook/useupcoming'
import Gpt from './Gpt'



export default function Browse() {

   const[gptview,setgptview]=useState(false)

  useApi()
  usepopularmovie()
  usetoprated()
  useupcoming()
  return (
    <div>
      <Header gptview={gptview} setgptview={setgptview}/>
      {
      gptview ? <Gpt/> :
      <>
      <Maincontainer/>
      <Secondcontainer/>
      </>
      }
      
     
    </div>
  )
}
