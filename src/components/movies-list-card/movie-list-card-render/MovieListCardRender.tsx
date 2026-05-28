import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useParams} from "react-router-dom";
import {Loading} from "../../loading/Loading.tsx";
import {MovieListCard} from "../movie-list-card/MovieListCard.tsx";
import {Error} from "../../error/Error.tsx";

export const MovieListCardRender = () => {

    const{id}=useParams()
    const {movie, loadState,error} = useAppSelector(({movieSlice})=>movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
         if(id) dispatch(movieSliceActions.loadMovie(id))
    }, [id]);

    if(error){
        return <Error/>
    }


    return (
        <>
            {
                !loadState && <Loading/>
            }
            {
                movie && <section><MovieListCard key={movie.id} item={movie}/></section>
            }
        </>
    );
};
