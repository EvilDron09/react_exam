import * as axios from "axios";
import {key} from "../keys/keyAndToken.ts";

import type {IResult} from "../models/movie/IResults.ts";
import type {IMovie} from "../models/movie/IMovie.ts";
import type {IGenre} from "../models/genre/IGenre.ts";
import type {IGenres} from "../models/genre/IGenres.ts";


const axiosInstace = axios.create({
    baseURL:`https://api.themoviedb.org/3`,
    headers:{'accept': 'application/json'},
    params:{
        api_key:key
    }
})


export const getMovies = async():Promise<IResult[]> =>{
    const {data} = await axiosInstace.get<IMovie>("/discover/movie");
    return data.results;
}

export const getMovie = async(id:string):Promise<IResult> =>{
    const {data} = await axiosInstace.get<IResult>(`/movie/${id}`);
    return data;
}

export const  getGenre = async():Promise<IGenre[]> =>{
    const {data} = await axiosInstace.get<IGenres>('/genre/movie/list');
    return data.genres;
}

// export const getMovieGenre = async (id:string):Promise<IGenre> =>{
//     const {data} = await axiosInstace.get<IGenre>(`/discover/movie?with_genres=${id}`);
//     return data;
// }
