import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import "../../movies-list/movie-list-render/style/moviesListRenderStyle.css"
import {Loading} from "../../loading/Loading.tsx";
import {useParams} from "react-router-dom";
import {genresSliceAction} from "../../../redux/genreSlice/genreSlice.ts";
import {MovieList} from "../../movies-list/movie-list/MovieList.tsx";
import {PosterPreviewRender} from "../../posters_preview/poster_preview_render/PosterPreviewRender.tsx";
import {Error} from "../../error/Error.tsx";


export const GenresBadgePageComponentRender = () => {
    const {id} = useParams()
    const {moviesGenre, loadState,error} = useAppSelector(({movieSlice}) => movieSlice);

    const dispatch = useAppDispatch();
    const { genres } = useAppSelector(({ genreSlice }) => genreSlice);
    const currentGenre = genres.find(genre =>genre.id===Number(id))

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(genresSliceAction.loadGenres());
        }

        if(id)dispatch(movieSliceActions.loadMoviesGenre(id))
    }, [id]);

    if(error){
        return <Error/>
    }

    return (
        <main>

            {
                !loadState && <Loading/>
            }
            {
               currentGenre && <h3>{currentGenre.name}</h3>
            }
              <section className={"renderMovie"}>
                {
                     moviesGenre.map(movie => <MovieList key={movie.id} item={movie}/>)
                }
              </section>
                <PosterPreviewRender/>
        </main>
    );
};
