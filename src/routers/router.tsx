import {createBrowserRouter} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MoviePosterPage} from "../pages/MoviePosterPage.tsx";

export const router = createBrowserRouter([
    {path:"/", element:<MoviesPage/>, children:[
            {path:"movie", element:<MoviePosterPage/>}
        ]}
])
