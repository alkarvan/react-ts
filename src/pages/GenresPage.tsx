import {Genres} from "../components";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Outlet/>
            <Genres/>
        </div>
    );
};

export {GenresPage};