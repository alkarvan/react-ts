import {FC, PropsWithChildren, useEffect, useState} from "react";

import css from './Movies.module.css'
import {usePageQuery} from "../../../hooks";
import {movieService} from "../../../services";
import {IMoviesList} from "../../../interfaces";
import {MovieDetails} from "../MovieDetails/MovieDetails";

interface IProps extends PropsWithChildren{

}

const Movies: FC<IProps> = () => {

    const [moviesRes, setMoviesRes] = useState<IMoviesList>({page:null, results:[]})
    const {currentPage, nextPage, prevPage} = usePageQuery();

    useEffect(() => {
        movieService.getAll(+currentPage).then(({data}) => setMoviesRes(() => {
            const {page, results} = data;
            return {
                page,
                results
            }
        }))
    }, [currentPage]);


    return (
        <div>
            <div className={css.list_of_movies}>
                {moviesRes.results.map(movie => <MovieDetails  movie={movie}/>)}
            </div>
            <div className={css.buttons_div}>
            <button disabled={+currentPage<2}  onClick={prevPage}> Prev </button>
                <div>{currentPage}</div>
            <button onClick={nextPage}> Next </button>
            </div>
        </div>
    );
};

export {Movies};