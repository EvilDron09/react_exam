import type {IResult} from "../../../models/movie/IResults.ts";
import {StarsRatingMovie} from "../../stars-rating/StarsRatingMovie.tsx";
import {Link} from "react-router-dom";


interface IMovieListCard {
    item: IResult
}

export const MovieInfo = ({item}:IMovieListCard) => {

    return (
        <section>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}  alt={item.title}/>
            <div>
                <h3>{item.original_title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span>/ Vote count: {item.vote_count}</p>
                <div>
                    <StarsRatingMovie/>
                </div>
                <button className={"openCard"}><Link to={'./card'}>Full information</Link></button>
            </div>
        </section>

    );
};
