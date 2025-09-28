import React, { useState } from 'react'
import profile_img from "../assets/profile_img.png"
import caret_img from "../assets/caret_icon.svg" 
import { signOut } from 'firebase/auth'
import { auth } from '../Rule/firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adduser,removeuser } from '../Rule/userslice'
import {logo} from '../Rule/constant.js'
import { onAuthStateChanged } from 'firebase/auth'


export default function Header({gptview,setgptview}) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const location=useLocation()
  const hidesignbutton=location.pathname==="/"
  
 

  function handlesearch(){
setgptview(!gptview)
  }

function handleSignout(){
  signOut(auth)
    .then(()=>{
      navigate("/")
    })
    .catch((err)=>{
    navigate("/error")
    })
  
}

useEffect(()=>{

const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,displayName,email}=user;
    dispatch(adduser({uid:uid,email:email,displayName:displayName}))
    navigate("/browse")
    
  } else {
   dispatch(removeuser())
    navigate("/")
  }
});
return ()=>unsubscribe();
},[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black
     w-screen flex flex-col md:flex-row justify-between items-center z-[100] mx-auto md:mx-0 '>
      
    
       <img
        className='w-44'
        src={logo}
        alt="logo" 
      /> 

    
     {!hidesignbutton && <div className='flex items-center gap-1 relative group'>

      <button onClick={handlesearch}
      className='bg-purple-800 py-2 px-2 text-white rounded-md'>{gptview ? "Home Page" : "Gpt Search"}</button>
        
        <img src={profile_img} alt="profile" className='w-9 h-9 rounded z-1' />

   
       

        <img src={caret_img} alt="caret" className='w-4 h-4 cursor-pointer' />



        
        <p className='absolute top-12  cursor-pointer right-0 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300' onClick={handleSignout}>
          Sign Out
        </p>
      </div>}
    </div>
  )
}