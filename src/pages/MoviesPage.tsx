import {Outlet} from "react-router-dom";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";

export const MoviesPage = () => {
    return (
        <>
        <Outlet/>
<MoviesList/>
        </>
    );
};