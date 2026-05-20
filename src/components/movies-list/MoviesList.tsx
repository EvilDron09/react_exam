import {useEffect} from "react";
import {MoviesListCard} from "../movies-list-card/MoviesListCard.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../redux/movieSlice/movieSlice.ts";
import './style/moviesListStyle.css'

export const MoviesList = () => {
    const {movies} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieSliceActions.loadMovies())
    }, []);
    return (
        <main>
            {
                movies.map(movie => <MoviesListCard key={movie.id} item={movie}/>)
            }
        </main>
    );
};
