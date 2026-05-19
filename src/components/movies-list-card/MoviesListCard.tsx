import type {IResult} from "../../models/IResults.ts";

interface IMoviesListCard {
    item: IResult
}

export const MoviesListCard = ({item}:IMoviesListCard) => {
    return (
        <div>
            {item.title}
        </div>
    );
};