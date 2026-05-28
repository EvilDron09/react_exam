import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {MovieListRender} from "../components/movies-list/movie-list-render/MovieListRender.tsx";


export const MoviesPage = () => {
    return (
        <>
            <Header/>
            <MovieListRender/>
            <Outlet/>
        </>
    );
};


