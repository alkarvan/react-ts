import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <div>
            <NavLink to={'movies'}> MOVIES </NavLink>
            <NavLink to={'genres'}> GENRES </NavLink>
        </div>
    );
};

export {Header};