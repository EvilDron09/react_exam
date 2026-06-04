import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {MovieListRender} from "../components/movies-list/movie-list-render/MovieListRender.tsx";
import './style/pageStyle.css'

export const MoviesPage = () => {
    return (
        <div className={'page'}>
            <Header/>
            <MovieListRender/>
            <Outlet/>
        </div>
    );
};


