import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import './style/moviesListRenderStyle.css'
import {Loading} from "../../loading/Loading.tsx";
import {MovieList} from "../movie-list/MovieList.tsx";
import {PopularMoviesPosterRender} from "../../popular_movies/popular_movies_poster_render/PopularMoviesPosterRender.tsx";
import {Error} from "../../error/Error.tsx";
import {useSearchParams} from "react-router-dom";
import {PopularPosterPreviewRender} from "../../poster_preview/popular_poster_preview_render/PopularPosterPreviewRender.tsx";

export const MovieListRender = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page'))||1
    const totalPage = 500;

    const handlerPage = (newPage:number)=>{
        setSearchParams({page:String(newPage)})
    }

    const {movies, loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieSliceActions.loadPageMovies(page));

    }, [page]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [page]);



    if(error){
        return <Error/>
    }

    return (
        <div>

            {
                !loadState && <Loading/>
            }
            <PopularPosterPreviewRender/>
            <section className={"renderMovie"}>
                {
                  movies && movies.map(movie => <MovieList key={movie.id} item={movie}/>)
                }

            </section>
            <div className={'search'}>
                <button onClick={() => handlerPage(Math.max(page -1,1) )} disabled={page === 1}>Back</button>
                <p>{page}</p>
                <button onClick={() => handlerPage(Math.min(page +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
            </div>
            <PopularMoviesPosterRender/>
        </div>
    );
};
