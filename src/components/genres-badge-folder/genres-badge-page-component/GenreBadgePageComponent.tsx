
import {useNavigate} from "react-router-dom";

import type {IResult} from "../../../models/movie/IResults.ts";


interface IGenreBadgePageComponent{
    item:IResult
}


export const GenreBadgePageComponent = ({item}:IGenreBadgePageComponent) => {
    const navigate = useNavigate();
    const toGoPosterMovie = () => {
        navigate(`/movieInfo/${item.id}`)
    }


    return (
        <>
            <div className={"poster"} onClick={toGoPosterMovie}>
                <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
                <div>
                    <h3>{item.title} </h3>
                    <p>{item.vote_average}<span className={'star'}>&#9733;</span></p>
                </div>
            </div>
        </>
        )
};
