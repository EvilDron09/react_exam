import {useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import './style/moviesListRenderStyle.css'
import {Loading} from "../../loading/Loading.tsx";
import {MovieList} from "../movie-list/MovieList.tsx";
import {PopularMoviesPosterPreviewRender} from "../../posters_preview/poster_preview_poster_preview_render/PopularMoviesPosterPreviewRender.tsx";
import {Error} from "../../error/Error.tsx";
import {useSearchParams} from "react-router-dom";

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
        <main>

            {
                !loadState && <Loading/>
            }
            <section className={"renderMovie"}>
                {
                  movies && movies.map(movie => <MovieList key={movie.id} item={movie}/>)
                }

            </section>
            <div>
                <button onClick={() => handlerPage(Math.max(page -1,1) )} disabled={page === 1}>Back</button>
                <h3>{page}</h3>
                <button onClick={() => handlerPage(Math.min(page +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
            </div>
            <PopularMoviesPosterPreviewRender/>
        </main>
    );
};
