import React from 'react';
import s from './ErrorPage.module.css'
import {NavLink} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.buttonBlock}>
                <button className={s.button}>
                    <NavLink to={"/profile"}>Home Page</NavLink>
                </button>
            </div>
        </div>
    );
};