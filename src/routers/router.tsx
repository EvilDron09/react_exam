import {createBrowserRouter} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage.tsx";

import {MovieInfoPage} from "../pages/MovieInfoPage.tsx";
import {MovieListCardPage} from "../pages/MovieListCardPage.tsx";


export const router = createBrowserRouter([
    {path:"/", element:<MoviesPage/>, children:[]},
    {path:"/movieInfo/:id", element:<MovieInfoPage/>, children:[
            {path:"card", element:<MovieListCardPage/>}
        ]}
])
