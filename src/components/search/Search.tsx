import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {MovieList} from "../movies-list/movie-list/MovieList.tsx";
import {Loading} from "../loading/Loading.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/movieSlice/movieSlice.ts";
import {Error} from "../error/Error.tsx";
import {useSearchParams} from "react-router-dom";
import '../movies-list/movie-list-render/style/moviesListRenderStyle.css'
import './style/searchStyle.css'

export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page'))||1
    const query = searchParams.get('query')||""
    const totalPage = 500;

    const handlerPage = (newPage:number)=>{
        setSearchParams({query:query,page:String(newPage)})
    }

    const {filterSearchMovie,loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(query)
        dispatch(movieSliceActions.loadFilterSearchMovie({query, page}));

    }, [page,query]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [page]);

    useEffect(() => {
        if (query && page !== 1) {
            setSearchParams({ query, page: "1" });
        }
    }, [query, page, setSearchParams]);



    if(error){
        return <Error/>
    }

    return (
        <div>
            {
                !loadState && <Loading/>
            }
            {filterSearchMovie  && filterSearchMovie.length<1 &&(
                <div className={"noMovies"}>
                    <p> Sorry, there are no movies matching this request</p>
                </div>
            )}
            <div className={"renderMovie"}>
                {
                    filterSearchMovie .map(movie => <MovieList key={movie.id} item={movie}/>)
                }
            </div>
            {filterSearchMovie  && filterSearchMovie.length>19 &&(
            <div className={'search'}>
                <button onClick={() => handlerPage(Math.max(page -1,1) )} disabled={page === 1}>Back</button>
                <p>{page}</p>
                <button onClick={() => handlerPage(Math.min(page +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
            </div>
            )}
        </div>
    );
};
