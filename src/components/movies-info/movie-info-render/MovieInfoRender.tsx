
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect, useState} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {useParams} from "react-router-dom";
import {Loading} from "../../loading/Loading.tsx";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";
import {Error} from "../../error/Error.tsx";




export const MovieInfoRender = () => {



    const{id} = useParams()
    const {movie, loadState, error} = useAppSelector(({movieSlice}) => movieSlice);
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
                movie &&  <section><MovieInfo key={movie.id}  item={movie}/></section>
            }

        </>
    );
};
