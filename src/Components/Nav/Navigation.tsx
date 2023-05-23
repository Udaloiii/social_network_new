import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={s.mainBlock}>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.activeLink}` : s.link} to={"/profile"}>
                Profile
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.activeLink}` : s.link} to={"/messages"}>
                Messages
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.activeLink}` : s.link} to={"/friends"}>
                Friends
            </NavLink>
            <NavLink className={({isActive}) => isActive ? `${s.link} ${s.activeLink}` : s.link} to={"/news"}>
                News
            </NavLink>
        </div>
    );
};