import {createBrowserRouter} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieInfoPage} from "../pages/MovieInfoPage.tsx";
import {MovieListCardPage} from "../pages/MovieListCardPage.tsx";
import {GenreBadgePage} from "../pages/GenreBadgePage.tsx";


export const router = createBrowserRouter([
    {path:"/", element:<MoviesPage/>, children:[]},
    {path:"/genre/:id", element:<GenreBadgePage/>},
    {path:"/movieInfo/:id", element:<MovieInfoPage/>, children:[
            {path:"card", element:<MovieListCardPage/>}
        ]},

])
