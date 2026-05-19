import {useEffect, useState} from "react";
import type {IResult} from "../../models/IResults.ts";
import {getMovie} from "../../services/movie.service.ts";
import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";

export const MoviesList = () => {
    const [movies, setMovies] = useState<IResult[]>([])

    useEffect(() => {
        getMovie().then((movies) =>{
            setMovies(movies)
        })
    }, []);
    return (
        <section>
            {
                movies.map(movie => <MoviesListCard key={movie.id} item={movie}/>)
            }
        </section>
    );
};