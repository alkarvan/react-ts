import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../../interfaces";
import css from './Moviedetails.module.css'

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const MovieDetails: FC<IProps> = ({movie}) => {
    const {id, original_language, original_title, overview, poster_path, release_date, genre_ids
    }= movie
    return (
        <div className={css.movie}>
            <div>id: {id}</div>
            <div>original_language: {original_language}</div>
            <div>original_title: {original_title}</div>
            <div>overview: {overview}</div>
            {/*<div>poster_path: {poster_path}</div>*/}
            <div>release_date: {release_date}</div>
            {/*<div>genre_ids: {genre_ids}</div>*/}
        </div>
    );
};

export {MovieDetails};