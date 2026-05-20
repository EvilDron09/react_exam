import type {IResult} from "../../models/IResults.ts";
import './style/moviesListCardStyle.css'
import {Link} from "react-router-dom";


interface IMoviesListCard {
    item: IResult
}

export const MoviesListCard = ({item}:IMoviesListCard) => {
    return (
       <Link to={`/movie/${item.id}`}> <div className={"poster"}>
            <img src={`https://image.tmdb.org//t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <div><h3>{item.title} <span>{item.vote_average}</span></h3></div>
        </div>
       </Link>
    );
};
