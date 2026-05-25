import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";
import {GenreBadge} from "../genres-badge/GenreBadge.tsx";

export const GenreBadgeRender = () => {

    const {genres} =useAppSelector (({genreSlice}) =>genreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresSliceAction.loadGenres())
    }, []);
    return (
        <ul>
            {
                genres.map(genre => <GenreBadge key={genre.id} item={genre}/>)
            }
        </ul>
    );
};
