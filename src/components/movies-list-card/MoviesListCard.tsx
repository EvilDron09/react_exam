import type {IResult} from "../../models/IResults.ts";
import './style/moviesListCardStyle.css'
import {useNavigate} from "react-router-dom";



interface IMoviesListCard {
    item: IResult
}

export const MoviesListCard = ({item}:IMoviesListCard) => {

    const navigate = useNavigate();
    const toGoPosterMovie = () => {
        navigate(`/movie/${item.id}`)
    }
    return (
        <div className={"poster"} onClick={toGoPosterMovie}>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <div>
                <h3>{item.title} </h3>
                <p>{item.vote_average} <span className={'star'}>&#9733;</span></p>
            </div>
        </div>

    );
};
