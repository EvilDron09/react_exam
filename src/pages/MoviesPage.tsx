import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import {MovieListRender} from "../components/movies-list/movie-list-render/MovieListRender.tsx";
import './style/pageStyle.css'
import {useEffect} from "react";
import {createSession} from "../services/movie.service.ts";

export const MoviesPage = () => {

    useEffect(() => {
        const savedSession = localStorage.getItem('tmdb_guest_session');
        if (!savedSession){
            createSession().then(sessionId=>{
                localStorage.setItem('tmdb_guest_session',sessionId)
            })
        }
    }, []);
    return (
        <div className={'page'}>
            <Header/>
            <MovieListRender/>
            <Outlet/>
        </div>
    );
};


