
import {useNavigate} from "react-router-dom";
import type {IGenre} from "../../../models/genre/IGenre.ts";
import './style/GenreBadgeStyle.css'


interface IGenreBadge {
    item:IGenre
}


export const GenreBadge = ({item}:IGenreBadge) => {
    const navigate = useNavigate();
;

    const toGoGenre = () => {
        navigate(`/genre/${item.id}`)
        window.location.reload();
    }
    return (
        <>
            <li className={'genresBadge'}><button onClick={toGoGenre}>{item.name}</button></li>
        </>
    );
};
