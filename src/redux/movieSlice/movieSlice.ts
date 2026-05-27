import {createAsyncThunk, createSlice, isFulfilled, type PayloadAction} from "@reduxjs/toolkit";
import type {IResult} from "../../models/movie/IResults.ts";
import {getMovie, getMovies, getMoviesGenre,} from "../../services/movie.service.ts";


type MovieSliceType = {
    movies: IResult[],
    movie: IResult|null,
    loadState: boolean,
    moviesGenre: IResult[],
}

const initialState: MovieSliceType = {movies:[],movie:null, loadState:false, moviesGenre:[]};

export const loadMovies = createAsyncThunk('movieSlice/loadMovies',
    async (_,thunkAPI) =>{
    try {
        const movies = await getMovies();
        return thunkAPI.fulfillWithValue(movies);
    }catch (e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
    })

export const loadMovie = createAsyncThunk('movieSlice/loadMovie',
    async (id:string,thunkAPI) =>{
    try {
        const movie = await getMovie(id);
        return thunkAPI.fulfillWithValue(movie);
    }catch (e){
        console.log(e);
        return thunkAPI.rejectWithValue('error')
    }
    })

export const loadMoviesGenre = createAsyncThunk('movieSlice/loadMoviesGenre',
async (id:string, thunkAPI)=>{
    try{
        const moviesGenre = await getMoviesGenre(id);
        return thunkAPI.fulfillWithValue(moviesGenre);
    }catch (e){
        console.log(e);
        return thunkAPI.rejectWithValue('error')
    }
})

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initialState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) => {
            state.loadState = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loadMovies.fulfilled,(state, action:PayloadAction<IResult[]>) =>{
            state.movies = action.payload
        })
            .addCase(loadMovie.fulfilled,(state, action:PayloadAction<IResult>)=>{
            state.movie = action.payload
        })
            .addCase(loadMoviesGenre.fulfilled,(state, action:PayloadAction<IResult[]>) =>{
                state.moviesGenre = action.payload
            })
            .addMatcher(isFulfilled(loadMovie,loadMovies,loadMoviesGenre),(state) =>{
                state.loadState=true
        })

    }
})

export const movieSliceActions ={
    ...movieSlice.actions, loadMovies,loadMovie,loadMoviesGenre
}
