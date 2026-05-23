
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {useParams} from "react-router-dom";
import {Loading} from "../../loading/Loading.tsx";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";




export const MovieInfoRender = () => {
    const{id} = useParams()
    const {movie, loadState} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(movieSliceActions.loadMovie(id))
    }, [id]);

    return (
        <>
            {
                !loadState && <Loading/>
            }
            {
                movie && <section><MovieInfo key={movie.id} item={movie}/></section>
            }
        </>
    );
};
