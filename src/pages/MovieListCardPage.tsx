import {MovieListCardRender} from "../components/movies-list-card/movie-list-card-render/MovieListCardRender.tsx";
import './style/pageStyle.css'

export const MovieListCardPage = () => {
    return (
        <div className={'page'}>
            <MovieListCardRender/>
        </div>
    );
};
