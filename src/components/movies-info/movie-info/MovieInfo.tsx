import type {IResult} from "../../../models/movie/IResults.ts";
import {StarsRatingMovie} from "../../stars-rating/StarsRatingMovie.tsx";
import './style/movieInfoStyle.css';


interface IMovieListCard {
    item: IResult
}

export const MovieInfo = ({item}:IMovieListCard) => {


    return (
        <div className={'movieInfo'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}  alt={item.title}/>
            </div>

            <div>
                <h3>{item.original_title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span>/ Vote count: {item.vote_count}</p>
                <div>
                    <StarsRatingMovie/>
                </div>
            </div>
        </div>

    );
};
