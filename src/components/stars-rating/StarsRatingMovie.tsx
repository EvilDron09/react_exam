
import  {Rating}  from  'react-simple-star-rating'
import {useState} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {postRatings} from "../../redux/ratingSlice/ratingSlice.ts";
import type {IResult} from "../../models/movie/IResults.ts";

interface IStarsRatingMovie {
    item:IResult
}

export  const  StarsRatingMovie  =({item}:IStarsRatingMovie) =>  {

    const dispatch = useAppDispatch()

    const  [rating ,  setRating]  =  useState ( 0 )
    const [isReadOnly, setIsReadOnly] = useState(false);

    const  handleRating  =  ( rate : number )  =>  {
        setRating ( rate );
        setIsReadOnly(true);
        dispatch(postRatings({
            movie_id:item.id,
            rating:rate
        }))
    }


    return  (
        < div  className = 'App' >
            < Rating
                onClick = { handleRating }
                initialValue={rating}
                iconsCount={10}
                allowFraction
                transition
                readonly={isReadOnly}
            />

        </ div >
    )
}
