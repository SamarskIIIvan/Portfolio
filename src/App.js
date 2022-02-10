import React from "react";
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Hire} from "./Hire/Hire";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";


export function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hire/>
            <Contacts/>
            <Footer/>
        </div>
    );
}


