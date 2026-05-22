import * as axios from "axios";
import {key} from "../keys/keyAndToken.ts";

import type {IResult} from "../models/IResults.ts";
import type {IMovie} from "../models/IMovie.ts";

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
