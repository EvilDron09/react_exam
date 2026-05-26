
import {useNavigate} from "react-router-dom";
import type {IGenre} from "../../../models/genre/IGenre.ts";



interface IGenreBadge {
    item:IGenre
}


export const GenreBadge = ({item}:IGenreBadge) => {
    const navigate = useNavigate()
    const toGoGenre = () => {
        navigate(`/genre/${item.id}`)
    }
    return (
        <>
            <li><button onClick={toGoGenre}>{item.name}</button></li>
        </>
    );
};
