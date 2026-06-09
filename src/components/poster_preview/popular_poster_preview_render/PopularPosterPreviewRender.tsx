import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect, useState} from "react";
import {movieSliceActions} from "../../../redux/movieSlice/movieSlice.ts";
import {PopularPosterPreview} from "../popular_poster_preview/PopularPosterPreview.tsx";
import './style/PopularPosterPreviewRenderStyle.css'


export const PopularPosterPreviewRender = () => {

    const {popularMovie} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        dispatch(movieSliceActions.loadPopularMovie());

    }, []);

    useEffect(() => {
        if(popularMovie.length === 0) return;

        const interval = setInterval(() =>{
            setCurrentIndex((prevIndex) =>{
                return prevIndex === popularMovie.length-1 ? 0 : prevIndex + 1;
            });
        }, 8000)
        return() => clearInterval(interval)
    }, [popularMovie]);

    const currentMovie = popularMovie[currentIndex];

    if(!popularMovie || popularMovie.length === 0 || !popularMovie[currentIndex]){
        return null
    }

    return (
        <div>
            <div key={currentMovie.id} className={'posterPreview'}>
                <PopularPosterPreview item={currentMovie}/>
            </div>
        </div>
    );
};
