import {GenresBadgePageComponentRender} from "../components/genres-badge-folder/genre-badge-page-component/GenresBadgePageComponentRender.tsx";
import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import './style/pageStyle.css'

export const GenreBadgePage = () => {


    return (
       <div className={'page'}>
           <Header/>
           <GenresBadgePageComponentRender/>
           <Outlet/>
       </div>
    );
};
