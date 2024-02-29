import {createBrowserRouter, Navigate} from "react-router-dom";


import {MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {GenresPage} from "./pages/GenresPage";


const router = createBrowserRouter([
    {
        path: '',element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
])

export {
    router
}