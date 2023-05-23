import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navigation} from "./Components/Nav/Navigation";
import {Profile} from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Messages} from "./Components/Messages/Messages";
import {Friends} from "./Components/Friends/Friends";
import {ErrorPage} from "./Components/ErrorPage/ErrorPage";
import {News} from "./Components/News/News";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="navWithContent">
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={<Profile/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/messages"} element={<Messages/>}/>
                    <Route path={"/friends"} element={<Friends/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/*"} element={<ErrorPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
