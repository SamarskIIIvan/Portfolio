import React from "react";
import style from './Skills.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import logoReact from "../assets/image/React.svg";
import logoRedux from "../assets/image/icons8-redux.svg";
import logoHTML from "../assets/image/icons8-html-5.svg";
import logoTypeScript from "../assets/image/icons8-typescript.svg";
import logoJavaScript from "../assets/image/icons8-javascript.svg";
import logoCSS from "../assets/image/icons8-css3.svg";


 export function Skills() {
     const rect = {
         backgroundImage: `url(${logoReact})`
     }
     const redux = {
         backgroundImage: `url(${logoRedux})`
     }
     const typeScript = {
         backgroundImage: `url(${logoTypeScript})`
     }
     const javaScript = {
         backgroundImage: `url(${logoJavaScript})`
     }
     const css= {
         backgroundImage: `url(${logoCSS})`
     }
     const html= {
         backgroundImage: `url(${logoHTML})`
     }

    return (
        <div id={"skills"}
            className={style.skillsBlock}>
            <div className={style.container}>
                <Title title={"Skills"}/>
                <div className = {style.skills}>
                 <Skill title ={"HTML"}
                        stile = {html}/>
                 <Skill title ={"CSS"}
                        stile = {css}/>
                 <Skill title ={"JavaScript"}
                        stile = {javaScript}/>
                 <Skill title ={"TypeScript"}
                        stile = {typeScript}/>
                 <Skill title ={"React"}
                        stile = {rect}/>
                 <Skill title ={"Redux"}
                        stile = {redux}/>
                </div>
            </div>
        </div>
    );
}
