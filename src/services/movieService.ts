import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMoviesList} from "../interfaces";

const movieService = {
    getAll: (page:number): IRes<IMoviesList> => apiService.get(urls.movies, {params: {page}})
}

export {
    movieService
}