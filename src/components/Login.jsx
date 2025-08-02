import React, { useRef, useState } from 'react'
import Header from './Header'
import { formvalidation } from '../Rule/formvalidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Rule/firebase';



export default function Login() {

  const [sign,setsign]=useState(false);
  const email=useRef(null);
  const password=useRef(null);
  const[errmessage,seterrmessage]=useState(null)
  

  function toogle(){
setsign(!sign)
  }
  function handlebutton(){
   const message= formvalidation(email.current.value,password.current.value)
   seterrmessage(message)

   if(message) return;

   if(sign){
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((usercrendetial)=>{
      usercrendetial.user
      
    }).catch((error)=>{
      const errcode=error.code;
      const errmessag=error.message;
      seterrmessage(errcode+errmessag);
    })
   }

   else{
   signInWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((usercrendetial)=>{
      usercrendetial.user
      
    }).catch((error)=>{
      const errcode=error.code;
      const errmessag=error.message;
      seterrmessage(errcode+errmessag);
    })
   }

  }
  return (
    <div className="relative h-screen w-screen">

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"
        alt="logo"
      />

      
      <Header />

     
      <form className="absolute top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2 
      bg-black bg-opacity-80 p-12 md:w-4/12 rounded-lg w-full" 
      onSubmit={(event)=>event.preventDefault()}>

       <h1 className='font-bold text-white text-2xl py-4'>{sign ? "Sign Up " : "Sign In"}</h1>

        {sign ?<input type="text"
       placeholder="Enter name"
      className="p-2 m-2 w-full bg-gray-800 text-white" /> : null}

        <input type="text"
       placeholder="Email Address"
      className="p-2 m-2 w-full bg-gray-800 text-white"  
      ref={email}/>

        <input type="password"
         placeholder="Password"
        className="p-2 m-2 w-full bg-gray-800 text-white" 
        ref={password}/>

        <p className='text-red-500 p-1 m-1'>{errmessage}</p>

        <button className="p-3 m-2 w-full bg-red-600 text-white font-bold" onClick={handlebutton}>{sign ? "Sign Up " : "Sign In"}</button>

        <p className='text-white py-4 cursor-pointer' onClick={toogle}>{sign ?"Already registered? Sign InNow" :"New to Netflix?Sign up Now "}</p>
      </form>
    </div>
  )
}