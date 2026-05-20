
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../../redux/movieSlice/movieSlice.ts";
import {MoviePosterListCard} from "../movie-poster-list-card/MoviePosterListCard.tsx";
import {useParams} from "react-router-dom";



export const MoviePosterList = () => {
    const{id} = useParams()
    const {movie} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(movieSliceActions.loadMovie(id))
    }, [id]);

    return (
        <>
            {
                movie && <section><MoviePosterListCard item={movie}/></section>
            }
        </>
    );
};
