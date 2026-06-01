import {createAsyncThunk, createSlice,  type PayloadAction} from "@reduxjs/toolkit";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {getGenre} from "../../services/movie.service.ts";


type GenreSliceType = {
    genres:IGenre[],
    menu:boolean

}

const initialState: GenreSliceType = {genres:[], menu:false}

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


export const genreSlice = createSlice ({
    name: "genreSlice",
    initialState: initialState,
    reducers: {
        changeCloseMenu: (state) => {
            state.menu = !state.menu
        },

    closeMenu: (state) => {
        state.menu = false;
    },

    },
    extraReducers: builder => {
        builder.addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload
        })

    }

})

export const genresSliceAction = {
    ...genreSlice.actions, loadGenres
}
