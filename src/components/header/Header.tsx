import './style/headerStyle.css'
import {type SyntheticEvent, useState} from "react";
import {GenreBadgeRender} from "../genres-badge-folder/genres-badge-render/GenreBadgeRender.tsx";
import {UserInfo} from "../user-info/UserInfo.tsx";
import {Link, useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {loadSearch} from "../../redux/movieSlice/movieSlice.ts";
import * as React from "react";





export const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
   const [openGenres, setOpenGenres] = useState(false);
   const toggleGenres = () => setOpenGenres(!openGenres);

   const [searchQuery, setSearchQuery] = useState('');
   const [searchError, setSearchError] = useState<string|null>(null)
   const handleSearchSubmit = async (e:SyntheticEvent) =>{
       e.preventDefault();
       setSearchError(null);

       if(searchQuery.trim()){
           try {
               const response = await dispatch(loadSearch(searchQuery.trim())).unwrap();
               if(response && response.length >0){
                   const firstMovie = response[0];
                   navigate((`/movieInfo/${firstMovie.id}`));
               }else{
                setSearchError('film not found')
                   setTimeout(() => setSearchError(null),1500)
               }
           }catch (e){
               console.log(e)
           }finally {
               setSearchQuery('')
           }
       }
   }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (searchError) setSearchError(null);
    };


    return (
        <header>
            <UserInfo/>
            <h1><Link to={'/'}>React Exam</Link></h1>
            <div>
                <div className={"genres"}>
                    <button onClick={toggleGenres} >Genres</button>
                    {openGenres && (
                        <div>
                            <GenreBadgeRender/>
                            </div>
                    )}
                </div>
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" value={searchQuery} placeholder={"movie search"} onChange={handleInputChange}/>
                    {searchError &&
                        <div className={'searchError'}>
                            <p >{searchError}</p>
                        </div>  }
                        <button type="submit">Search</button>

                </form>
            </div>
        </header>
    );
};
