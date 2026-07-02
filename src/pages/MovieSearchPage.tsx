import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import './style/pageStyle.css'
import {Search} from "../components/search/Search.tsx";

export const MovieSearchPage = () => {


    return (
        <div className={'page'}>
            <Header/>
           <Search/>
            <Outlet/>
        </div>
    );
};
