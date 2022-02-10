import React from "react";
import style from './Skills.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

 export function Skills() {
    return (
        <div id={"skills"}
            className={style.skillsBlock}>
            <div className={style.container}>
                <Title title={"Skills"}/>
                <div className = {style.skills}>
                 <Skill title ={"HTML"} description = {"I"}/>
                 <Skill title ={"CSS"}description = {"am"}/>
                 <Skill title ={"JavaScript"}description = {"super"}/>
                 <Skill title ={"React"}description = {"mega"}/>
                 <Skill title ={"Redux"}description = {"developer"}/>
                </div>
            </div>
        </div>
    );
}

