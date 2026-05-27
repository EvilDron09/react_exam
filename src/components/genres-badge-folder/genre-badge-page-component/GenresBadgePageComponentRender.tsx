import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";

import {Loading} from "../../loading/Loading.tsx";
import {GenreBadgePageComponent} from "../genres-badge-page-component/GenreBadgePageComponent.tsx";
import {useParams} from "react-router-dom";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";


export const GenresBadgePageComponentRender = () => {
    const {id} = useParams()
    const {moviesGenre, loadState} = useAppSelector(({movieSlice}) => movieSlice);

    const dispatch = useAppDispatch();
    const { genres } = useAppSelector(({ genreSlice }) => genreSlice);


    useEffect(() => {
        if (genres.length === 0) {
            dispatch(genresSliceAction.loadGenres());
        }

        if(id)dispatch(movieSliceActions.loadMoviesGenre(id))
    }, [id]);

    return (
        <div>
            {
                !loadState && <Loading/>
            }
            {

            }
            {

                moviesGenre.map(movie => <GenreBadgePageComponent key={movie.id} item={movie}/>)

            }
        </div>
    );
};
