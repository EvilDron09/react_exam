import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IRating} from "../../models/rating/IRating.ts";
import {postRating} from "../../services/movie.service.ts";


type RatingSliceType = {
    ratings:IRating|null,
}

interface IRatingSlice {
    movie_id: number,
    rating: number
}

const initialState: RatingSliceType ={ratings:null}

export const postRatings = createAsyncThunk('ratingSlice/postRatings',
    async ({movie_id, rating}:IRatingSlice, thunkAPI) =>{
        try {
           return  await postRating(movie_id,rating);
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }

    })

export const ratingSlice = createSlice({
    name:"ratingSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(postRatings.fulfilled,(state, action:PayloadAction<IRating>)=>{
            state.ratings=action.payload
        })
    }
})

export const ratingSliceAction = {
    ...postRatings
}
