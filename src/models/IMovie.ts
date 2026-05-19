import type {IResult} from "./IResults.ts";

export interface IMovie {
    page: number,
    results: IResult[],
    total_pages: number,
    total_results: number,
}