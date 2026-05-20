import {Outlet} from "react-router-dom";
import {MoviesList} from "../components/movies-list/MoviesList.tsx";
import {Header} from "../components/header/Header.tsx";

export const MoviesPage = () => {
    return (
        <>
        <Header/>
        <MoviesList/>
            <Outlet/>
        </>
    );
};


