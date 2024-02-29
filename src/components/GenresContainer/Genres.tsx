import {FC, PropsWithChildren, useEffect, useState} from "react";

import {genreService} from "../../services";
import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren{
    // genres: IGenre[]
}
const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(()=>{
        genreService.getAll().then(({data}) => setGenres(data))
          }, [])
    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};