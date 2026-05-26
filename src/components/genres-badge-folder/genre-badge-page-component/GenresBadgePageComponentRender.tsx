
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

import {Loading} from "../../loading/Loading.tsx";
import {useParams} from "react-router-dom";
import {GenreBadgePageComponent} from "../genres-badge-page-component/GenreBadgePageComponent.tsx";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";



export const GenresBadgePageComponentRender = () => {


    const {genres, loadState} = useAppSelector(({genreSlice}) => genreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresSliceAction.loadGenres())
    }, []);
    return (
        <main>
            {
                !loadState && <Loading/>
            }
            {
              genres.map(genre => <GenreBadgePageComponent key={genre.id} item={genre}/>)
            }
        </main>
    );
};
