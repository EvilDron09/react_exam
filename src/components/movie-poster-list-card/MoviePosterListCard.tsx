import type {IResult} from "../../models/IResults.ts";

interface IMoviePosterListCard {
    item:IResult
}

export const MoviePosterListCard = ({item}:IMoviePosterListCard) => {
    return (
        <div>
            {item.title}
        </div>
    );
};
