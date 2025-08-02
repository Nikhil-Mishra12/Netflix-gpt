import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userslice'
import movieReducer from './movieslice'
import gptReducer from './gptslice'
 
 const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
    },
 })

 export default appstore;