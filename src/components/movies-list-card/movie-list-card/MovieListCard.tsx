import type {IResult} from "../../../models/movie/IResults.ts";

interface IMovieInfo {
    item:IResult
}

export const MovieListCard = ({item}:IMovieInfo) => {
    return (
        <section>
            <div>
                <p>Language:{item.original_language}</p>
                <div>Genre: {item.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>
                <p>{item.overview}</p>
                <p>Release data: {item.release_date}</p>
            </div>
        </section>
    );
};
