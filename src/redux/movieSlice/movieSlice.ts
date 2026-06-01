import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IResult} from "../../models/movie/IResults.ts";
import {getMovie, getMovies, getMoviesGenre, getPageMovies,} from "../../services/movie.service.ts";



type MovieSliceType = {
    movies: IResult[],
    preview: IResult[]
    movie: IResult|null,
    loadState: boolean,
    moviesGenre: IResult[],
    error:boolean
}

const initialState: MovieSliceType = {movies:[],preview:[],movie:null, loadState:false, moviesGenre:[], error:false};

export const loadPageMovies = createAsyncThunk('movieSlice/loadPageMovies',
    async (page:number,thunkAPI) =>{
    try {
        const movies = await getPageMovies(page);
        return thunkAPI.fulfillWithValue(movies);
    }catch (e){
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
    })

export const loadMovies = createAsyncThunk('movieSlice/loadMovies',
    async (_,thunkAPI)=>{
    try {
        const preview = await getMovies();
        return thunkAPI.fulfillWithValue(preview);
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
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
    })

type loadMoviesGenreType = {
    id:string,
    page:number
}

export const loadMoviesGenre = createAsyncThunk('movieSlice/loadMoviesGenre',
async ({id, page}:loadMoviesGenreType, thunkAPI)=>{
    try{
        const moviesGenre = await getMoviesGenre(id,page);
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
        },
        clearError: (state, action:PayloadAction<boolean>) =>{
            state.error = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(loadPageMovies.fulfilled,(state, action:PayloadAction<IResult[]>) =>{
            state.movies = action.payload
        })
            .addCase(loadMovies.fulfilled,(state, action:PayloadAction<IResult[]>)=>{
                state.preview=action.payload
            })
            .addCase(loadMovie.fulfilled,(state, action:PayloadAction<IResult>)=>{
            state.movie = action.payload
        })
            .addCase(loadMoviesGenre.fulfilled,(state, action:PayloadAction<IResult[]>) =>{
                state.moviesGenre = action.payload
            })
            .addMatcher(isFulfilled(loadMovie,loadPageMovies,loadMoviesGenre),(state) =>{
                state.loadState=true
        })
            .addMatcher(isRejected(loadMovie,loadPageMovies,loadMoviesGenre),(state) =>{
                state.error = true;
            })

    }
})

export const movieSliceActions ={
    ...movieSlice.actions, loadPageMovies,loadMovie,loadMovies,loadMoviesGenre
}
