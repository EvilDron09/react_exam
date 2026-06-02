import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {PosterPreview} from "../poster_preview/PosterPreview.tsx";
import './style/PosterPreviewStyle.css'

export const PosterPreviewRender = () => {

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
                            <PosterPreview key={movie.id} item={movie}/>
                        </div>)
                }
            </div>
        </div>
    );
};
