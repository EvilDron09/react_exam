import * as axios from "axios";
import {key, token} from "../keys/keyAndToken.ts";

import type {IResult} from "../models/movie/IResults.ts";
import type {IMovie} from "../models/movie/IMovie.ts";
import type {IGenre} from "../models/genre/IGenre.ts";
import type {IGenres} from "../models/genre/IGenres.ts";
import type {IRating} from "../models/rating/IRating.ts";



const axiosInstance = axios.create({
    baseURL:`https://api.themoviedb.org/3`,
    headers:{'accept': 'application/json', 'Authorization': `Bearer ${token}`},
    params:{
        api_key:key,
    }
})

export const getMovies = async():Promise<IResult[]> =>{
    const {data} = await axiosInstance.get<IMovie>(`/discover/movie`);
    return data.results;
}

export const getPageMovies = async (page:number):Promise<IResult[]> => {
    const {data} = await axiosInstance.get<IMovie>(`/discover/movie?page=${page}`);
    return data.results
}

export const getMovie = async(id:string):Promise<IResult> =>{
    const {data} = await axiosInstance.get<IResult>(`/movie/${id}`);
    return data;
}

export const  getGenre = async():Promise<IGenre[]> =>{
    const {data} = await axiosInstance.get<IGenres>('/genre/movie/list');
    return data.genres;
}

export const getMoviesGenre = async (id: string, page:number): Promise<IResult[]> => {
    const {data} = await axiosInstance.get<{results: IResult[]}>(`/discover/movie?with_genres=${id}&page=${page}`);
    return data.results;
};

export const getPopularMovie = async (): Promise<IResult[]> =>{
    const {data} = await axiosInstance.get<IMovie>(`/discover/movie?sort_by=popularity.desc`);
    return data.results
};

export const getSearch = async(query:string): Promise<IResult[]> =>{
    const {data} = await axiosInstance.get<IMovie>(`/search/movie?query=${encodeURIComponent(query)}`);
    return data.results
}

export const createSession = async(): Promise<string> =>{
    const {data} = await axiosInstance.get<{guest_session_id:string}>('/authentication/guest_session/new');
    return data.guest_session_id;
}


export const postRating = async (movie_id: number, rating:number): Promise<IRating> =>{
    await axiosInstance.post<IRating>(`/movie/${movie_id}/rating`, { value: rating },{

    });
    return {
        movie_id: movie_id,
        rating: rating
    };
}

export const getFilterSearchMovie = async (query:string, page:number):Promise<IResult[]> =>{
    const {data} = await axiosInstance.get<IMovie>(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`);
    return data.results
}
