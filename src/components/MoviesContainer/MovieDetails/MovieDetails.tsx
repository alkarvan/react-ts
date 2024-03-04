import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../../interfaces";
import css from './Moviedetails.module.css'
import {urls} from "../../../constants";

interface IProps extends PropsWithChildren {
    movie: IMovie
}
const MovieDetails: FC<IProps> = ({movie}) => {
    const {original_title, poster_path}= movie

    const poster = urls.poster(poster_path)

    return (
        <div className={css.movie}>
            <img src={poster} alt={original_title}/>
            {/*<div>id: {id}</div>*/}
            {/*<div>original_language: {original_language}</div>*/}
            <div>original_title: {original_title}</div>
            {/*<div>overview: {overview}</div>*/}
            {/*<div>release_date: {release_date}</div>*/}
            {/*<div>genre_ids: {genre_ids}</div>*/}
        </div>
    );
};

export {MovieDetails};