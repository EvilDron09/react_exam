import './style/headerStyle.css'
import { useState} from "react";
import {GenreBadgeRender} from "../genres-badge-folder/genres-badge-render/GenreBadgeRender.tsx";
import {UserInfo} from "../user-info/UserInfo.tsx";
import {useNavigate} from "react-router-dom";




export const Header = () => {
   const [openGenres, setOpenGenres] = useState(false);
   const toggleGenres = () => setOpenGenres(!openGenres);

   const [searchQuery, setSearchQuery] = useState('');
   const handleSearchSubmit = () =>{


       if(searchQuery.trim()){
           navigate(`/movieInfo/${encodeURIComponent(searchQuery.trim())}`);
           setSearchQuery('')
       }
   }

   const navigate = useNavigate();
    const toGoMovieList = () => {
        navigate(`/`)
    }

    return (
        <header>
            <UserInfo/>
            <h1><button onClick={toGoMovieList}>React Exam</button></h1>
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
                    <input type="text" value={searchQuery} placeholder={"movie search"} onChange={(e) =>
                        setSearchQuery(e.target.value)}/>
                </form>
            </div>



        </header>
    );
};
