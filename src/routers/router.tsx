import {createBrowserRouter} from "react-router-dom";
import {MoviesPage} from "../pages/MoviesPage.tsx";

export const router = createBrowserRouter([
    {path:"/", element:<MoviesPage/>, children:[]}
])