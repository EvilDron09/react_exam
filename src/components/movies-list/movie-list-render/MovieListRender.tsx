import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import './style/moviesListRenderStyle.css'
import {Loading} from "../../loading/Loading.tsx";
import {MovieList} from "../movie-list/MovieList.tsx";

export const MovieListRender = () => {
    const {movies, loadState} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieSliceActions.loadMovies())
    }, []);
    return (
        <main>
            {
                !loadState && <Loading/>
            }
            {
                movies.map(movie => <MovieList key={movie.id} item={movie}/>)
            }
        </main>
    );
};
