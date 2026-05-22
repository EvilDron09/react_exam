
import  {  Rating  }  from  'react-simple-star-rating'
import {useState} from "react";

export  const  StarsRatingMovie  =() =>  {
    const  [ rating ,  setRating ]  =  useState ( 0 )

    const  handleRating  =  ( rate : number )  =>  {
        setRating ( rate )
    }

    return  (
        < div  className = 'App' >
            < Rating
                onClick = { handleRating }
                initialValue={rating}
                iconsCount={10}
                allowFraction

            />
        </ div >
    )
}
