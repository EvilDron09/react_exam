import type {IResult} from "../../../models/movie/IResults.ts";
import {useNavigate} from "react-router-dom";

interface IPosterPreview {
    item:IResult
}
export const PopularPosterPreview = ({item}:IPosterPreview) => {

    const navigate = useNavigate();
    const toGoPosterMovie = () => {
        navigate(`/movieInfo/${item.id}`)
    }

    return (
        <div onClick={toGoPosterMovie}>
            <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}  alt={item.title}/>
        </div>
    );
};
