import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {getGenre} from "../../services/movie.service.ts";


type GenreSliceType = {
    genres:IGenre[],
    loadState: boolean,

}

const initialState: GenreSliceType = {genres:[], loadState:false}

export const loadGenres = createAsyncThunk("genreSlice/loadGenres",
    async (_,thunkAPI) =>{
        try {
            const genres = await getGenre();
            return thunkAPI.fulfillWithValue(genres)
        }catch (e){
            console.log(e);
            return thunkAPI.rejectWithValue('error')
        }
    })

// export const loadGenre = createAsyncThunk("genreSlice/loadGenre",
//     async (id:string, thunkAPI)=>{
//     try {
//         const genre = await getGenre(id);
//         return thunkAPI.fulfillWithValue(genre);
//     }catch (e){
//         console.log(e);
//         return thunkAPI.rejectWithValue('error')
//     }
//     })

export const genreSlice = createSlice ({
    name: "genreSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(loadGenres.fulfilled,(state, action:PayloadAction<IGenre[]>)=>{
           state.genres = action.payload
        })
            // .addCase(loadGenre.fulfilled,(state, action:PayloadAction<IGenre>) =>{
            //     state.genre=action.payload
            // })
    }
})

export const genresSliceAction = {
    ...genreSlice.actions, loadGenres
}
