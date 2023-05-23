import React from 'react';
import s from './Header.module.css';
import logo from "../../Image/31530356_bird_2.jpg";


export const Header = () => {
    return (
        <header className={s.mainHeader}>
            <img className={s.logo} src={logo} alt="logo"/>
        </header>
    );
};