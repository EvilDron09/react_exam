import type {IResult} from "../movie/IResults.ts";

export interface IGenre {
    id: number;
    name: string;
    movies:IResult[];
}
