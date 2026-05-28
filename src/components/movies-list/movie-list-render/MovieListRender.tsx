import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import './style/moviesListRenderStyle.css'
import {Loading} from "../../loading/Loading.tsx";
import {MovieList} from "../movie-list/MovieList.tsx";
import {PosterPreviewRender} from "../../posters_preview/poster_preview_render/PosterPreviewRender.tsx";
import {Error} from "../../error/Error.tsx";

export const MovieListRender = () => {
    const {movies, loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieSliceActions.loadMovies())
    }, []);

    if(error){
        return <Error/>
    }

    return (
        <main>

            {
                !loadState && <Loading/>
            }
            <section className={"renderMovie"}>
                {
                    movies.map(movie => <MovieList key={movie.id} item={movie}/>)
                }

            </section>
            <PosterPreviewRender/>
        </main>
    );
};
