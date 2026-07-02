import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {MovieList} from "../movies-list/movie-list/MovieList.tsx";
import {Loading} from "../loading/Loading.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {loadSearch, movieSliceActions} from "../../redux/movieSlice/movieSlice.ts";
import {Error} from "../error/Error.tsx";
import {useSearchParams} from "react-router-dom";

export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page'))||1
    const query = searchParams.get('query')||""
    const totalPage = 500;

    const handlerPage = (newPage:number)=>{
        setSearchParams({query:query,page:String(newPage)})
    }

    const {search} = useAppSelector((state) => state.movieSlice);
    const {loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(query)
        dispatch(loadSearch({query, page}));

    }, [page,query]);

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
            <div>
                {
                search.map(movie => <MovieList key={movie.id} item={movie}/>)
                }
            </div>
            {search && search.length>0 &&(
            <div className={'search'}>
                <button onClick={() => handlerPage(Math.max(page -1,1) )} disabled={page === 1}>Back</button>
                <p>{page}</p>
                <button onClick={() => handlerPage(Math.min(page +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
            </div>
            )}
        </div>
    );
};
