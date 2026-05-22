import type {IResult} from "../../models/IResults.ts";
import {StarsRatingMovie} from "../stars-rating/StarsRatingMovie.tsx";


interface IMovieListCard {
    item: IResult
}

export const MoviePosterListCard = ({item}:IMovieListCard) => {

    return (
        <section>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span></p>
                <div>
                    <StarsRatingMovie/>
                </div>
            </div>
        </section>

    );
};
