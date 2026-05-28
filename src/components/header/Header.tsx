import './style/headerStyle.css'
import { useState} from "react";
import {GenreBadgeRender} from "../genres-badge-folder/genres-badge-render/GenreBadgeRender.tsx";
import {UserInfo} from "../user-info/UserInfo.tsx";
import {useNavigate} from "react-router-dom";
export const Header = () => {
   const [openGenres, setOpenGenres] = useState(false);
   const toggleGenres = () => setOpenGenres(!openGenres);

   const navigate = useNavigate();
    const toGoMovieList = () => {
        navigate(`/`)
    }

    return (
        <header>
            <UserInfo/>
            <h1><button onClick={toGoMovieList}>React Exam</button></h1>
            <div>
            <div style={{position: 'relative', display: 'inline-block'}}>
                <button onClick={toggleGenres} >Genres</button>
                {openGenres && (
                    <div style={{position: "absolute"} }>
                        <GenreBadgeRender/>
                        </div>
                )}
            </div>


            </div>


        </header>
    );
};
