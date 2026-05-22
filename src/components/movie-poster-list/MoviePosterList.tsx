
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/movieSlice/movieSlice.ts";
import {MoviePosterListCard} from "../movie-poster-list-card/MoviePosterListCard.tsx";
import {useParams} from "react-router-dom";
import {Loading} from "../loading/Loading.tsx";



export const MoviePosterList = () => {
    const{id} = useParams()
    const {movie, loadState} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(movieSliceActions.loadMovie(id))
    }, [id]);

    return (
        <>
            {
                !loadState && <section><Loading/></section>
            }
            {
                movie && <section><MoviePosterListCard item={movie}/></section>
            }
        </>
    );
};
