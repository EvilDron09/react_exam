import {GenresBadgePageComponentRender} from "../components/genres-badge-folder/genre-badge-page-component/GenresBadgePageComponentRender.tsx";
import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";


export const GenreBadgePage = () => {


    return (
       <>
           <Header/>
           <GenresBadgePageComponentRender/>
           <Outlet/>
       </>
    );
};
