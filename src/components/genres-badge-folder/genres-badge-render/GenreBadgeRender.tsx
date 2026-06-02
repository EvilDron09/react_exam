import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";
import {GenreBadge} from "../genres-badge/GenreBadge.tsx";
import {useNavigate} from "react-router-dom";

export const GenreBadgeRender = () => {

    const {genres} =useAppSelector (({genreSlice}) =>genreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresSliceAction.loadGenres());
    }, []);
    const navigate = useNavigate();
    const toGoMovieList = () => {
        navigate(`/`);
    }

    return (
        <ul>
            {
                genres.map(genre => <GenreBadge key={genre.id} item={genre}/>)
            }
            <li><button onClick={ toGoMovieList}>All movie</button></li>
        </ul>
    );
};
