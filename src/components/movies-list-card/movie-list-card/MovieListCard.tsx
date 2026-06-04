import type {IResult} from "../../../models/movie/IResults.ts";
import './style/movieListCardStyle.css'

interface IMovieInfo {
    item:IResult
}

export const MovieListCard = ({item}:IMovieInfo) => {
    return (
            <div className={'movieCard'}>
                <p>Language:{item.original_language}</p>
                <div>Genre: {item.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>
                <p>{item.overview}</p>
                <p>Release data: {item.release_date}</p>
            </div>
    );
};
