import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect, useRef, useState} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {useParams} from "react-router-dom";
import {Loading} from "../../loading/Loading.tsx";
import {MovieInfo} from "../movie-info/MovieInfo.tsx";
import {Error} from "../../error/Error.tsx";
import {MovieListCardRender} from "../../movies-list-card/movie-list-card-render/MovieListCardRender.tsx";
import './style/MovieInfoRender.css'


export const MovieInfoRender = () => {

    const [fullInfo, setFullInfo] = useState(false);

    const fullInfoRef = useRef<HTMLDivElement>(null);
    const toggleFullInfo = () =>{
        if(!fullInfo){
            setFullInfo(true);
            setTimeout(() =>{
                fullInfoRef.current?.scrollIntoView({
                    behavior:'smooth'
                })
            });
        }
        else {
            setFullInfo(false)

        }

    }

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
            <div className={'fullInfo'}>
                <button onClick={toggleFullInfo} >Full information</button>
                {fullInfo && (
                    <div ref={fullInfoRef}>
                        <MovieListCardRender/>
                    </div>
                )}
            </div>
        </>
    );
};
