import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularPlayingMovies:null,
        topratedmovie:null,
        Upcomingmovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularPlayingMovies:(state,action)=>{
            state.PopularPlayingMovies=action.payload;
        },
        addtopratedmovie:(state,action)=>{
            state.topratedmovie=action.payload;
        },
        addUpcomingmovie:(state,action)=>{
            state.Upcomingmovie=action.payload;
        },

    }
});

export const {addNowPlayingMovies,
    addPopularPlayingMovies,
 addtopratedmovie,
    addUpcomingmovie
}=movieslice.actions;
export default movieslice.reducer;