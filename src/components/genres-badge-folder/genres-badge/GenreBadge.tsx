
import {useNavigate} from "react-router-dom";
import type {IGenre} from "../../../models/genre/IGenre.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";



interface IGenreBadge {
    item:IGenre
}


export const GenreBadge = ({item}:IGenreBadge) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const toGoGenre = () => {
        navigate(`/genre/${item.id}`)
        dispatch(genresSliceAction.closeMenu())
    }
    return (
        <>
            <li><button onClick={toGoGenre}>{item.name}</button></li>
        </>
    );
};
