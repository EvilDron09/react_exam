import './style/headerStyle.css'
import { useState} from "react";
import {GenreBadgeRender} from "../genres-badge-folder/genres-badge-render/GenreBadgeRender.tsx";
export const Header = () => {
   const [openGenres, setOpenGenres] = useState(false);
   const toggleGenres = () => setOpenGenres(!openGenres);

    return (
        <header>
            <h1>React Exam</h1>
            <div>
            <div style={{position: 'relative', display: 'inline-block'}}>
                <button onClick={toggleGenres} >Genres</button>
                {openGenres && (
                    <div style={{position: "absolute"} }>
                        <GenreBadgeRender/>
                        </div>
                )}
            </div>


               <button>Authorization</button>
               <button>Registration</button>

            </div>

        </header>
    );
};
