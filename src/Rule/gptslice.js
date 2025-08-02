import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gpt",
    initialState:{
   movieNames:null,
   movieResults:null
    },
    reducers:{
        addGptMovies:(state,action)=>{
            const{movieNames,movieResults}=action.payload
     state.movieNames=movieNames
     state.movieResults=movieResults
        }
    }
})

export const {addGptMovies}=gptslice.actions

export default gptslice.reducer