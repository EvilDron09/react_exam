import {Header} from "../components/header/Header.tsx";
import {MovieInfoRender} from "../components/movies-info/movie-info-render/MovieInfoRender.tsx";
import {Outlet} from "react-router-dom";
import './style/pageStyle.css'

export const MovieInfoPage = () => {
    return (
        <div className={'page'}>
            <Header/>
            <MovieInfoRender/>
            <Outlet/>
        </div>
    );
};
