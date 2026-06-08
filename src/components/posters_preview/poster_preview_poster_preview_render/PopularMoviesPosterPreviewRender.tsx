import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {PopularMoviesPosterPreview} from "../popular_movies_poster_preview/PopularMoviesPosterPreview.tsx";
import './style/PopularMoviesStyle.css'

export const PopularMoviesPosterPreviewRender = () => {

    const {popularMovie} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    const duplicatedMovies = [...popularMovie, ...popularMovie];

    useEffect(() => {
        dispatch(movieSliceActions.loadPopularMovie())
    }, []);

    return (
        <div className={"running_line_container"}>
            <div className={"running_line_track"}>
                {
                    duplicatedMovies.map((movie, index) =>
                        <div className={"running_line_wrapper"} key={`${movie.id}-${index}`}>
                            <PopularMoviesPosterPreview key={movie.id} item={movie}/>
                        </div>)
                }
            </div>
        </div>
    );
};
