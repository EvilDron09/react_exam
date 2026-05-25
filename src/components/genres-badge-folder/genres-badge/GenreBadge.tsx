
import {useNavigate} from "react-router-dom";
import type {IResult} from "../../../models/movie/IResults.ts";


interface IGenreBadge {
    item:IResult
}


export const GenreBadge = ({item}:IGenreBadge) => {
    const navigate = useNavigate()
    const toGoGenre = () => {
        navigate(`/gener/${item.id}`)
    }
    return (
        <>
            <li><button onClick={toGoGenre}>{item.genres.map(genre =><p>{genre.name}</p>)}</button></li>
        </>
    );
};
