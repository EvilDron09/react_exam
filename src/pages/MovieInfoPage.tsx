import {Header} from "../components/header/Header.tsx";
import {MovieInfoRender} from "../components/movies-info/movie-info-render/MovieInfoRender.tsx";
import {Outlet} from "react-router-dom";


export const MovieInfoPage = () => {
    return (
        <>
            <Header/>
            <MovieInfoRender/>
            <Outlet/>
        </>
    );
};
