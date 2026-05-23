import type {IGenre} from "../genre/IGenre.ts";

export interface IResult {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[]
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genres: IGenre[]
}
