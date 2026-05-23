import type {IResult} from "../../../models/movie/IResults.ts";

import {useNavigate} from "react-router-dom";



interface IMoviesListCard {
    item: IResult
}

export const MovieList = ({item}:IMoviesListCard) => {

    const navigate = useNavigate();
    const toGoPosterMovie = () => {
        navigate(`/movieInfo/${item.id}`)
    }
    return (
        <div className={"poster"} onClick={toGoPosterMovie}>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <div>
                <h3>{item.title} </h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span></p>
            </div>
        </div>

    );
};
