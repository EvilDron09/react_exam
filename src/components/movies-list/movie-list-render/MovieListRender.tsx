import {useEffect, useState} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import './style/moviesListRenderStyle.css'
import {Loading} from "../../loading/Loading.tsx";
import {MovieList} from "../movie-list/MovieList.tsx";
import {PosterPreviewRender} from "../../posters_preview/poster_preview_render/PosterPreviewRender.tsx";
import {Error} from "../../error/Error.tsx";

export const MovieListRender = () => {


    const pagination =  Array.from({length: 1000 }, (_, i) => `${i + 1}`);
    const itemOnPage = 10;

    const [page, setPages] = useState(1);

    const indexOfLastItem = page * itemOnPage;
    const indexOfFirstItem = indexOfLastItem - itemOnPage;

    const currentItem = pagination.slice(indexOfFirstItem, indexOfLastItem);

    const totalPage = Math.ceil(pagination.length/itemOnPage);

    const {movies, loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(movieSliceActions.loadMovies(page))
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
                   movies.map(movie => <MovieList key={movie.id} item={movie}/>)
                }
                <div>
                    <button onClick={() => setPages(prev => Math.max(prev -1,1) )} disabled={page === 1}>Back</button>
                    <h3>{page}</h3>
                    <button onClick={() => setPages(prev => Math.min(prev +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
                </div>

            </section>
            <PosterPreviewRender/>
        </main>
    );
};
