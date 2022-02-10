import React from "react";
import style from "./Projects.module.scss"
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
import socialImage from "../assets/image/social-network.png"
import todoListImage from "../assets/image/todolistImages.png"
import fitnessImage from "../assets/image/samarskaia.PNG"
import oilImage from "../assets/image/orig-66-1633998280.jpeg"


export function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoListImage})`
    }
    const fitness = {
        backgroundImage: `url(${fitnessImage})`
    }
    const oil = {
        backgroundImage: `url(${oilImage})`
    }
    return (
        <div id={"projects"}
            className={style.projectsBlock}>
            <div className={style.container}>
                <Title title={"Projects"}/>
                <div className={style.projects}>
                    <Project title={"Social Network"}
                             description={"Big app in which I honed all my skills"}
                             style={social}
                             a={"https://samarskiiivan.github.io/Social-Network"}
                    />
                    <Project title={"TodoList"}
                             description={"My good project"}
                             style={todo}
                             a={"https://samarskiiivan.github.io/Todolist"}
                    />
                    <Project title={"fitnesssamarskaia.com"}
                             description={"App for buying fitness workouts"}
                             style={fitness}
                             a={"https://fitnesssamarskaia.com"}
                    />
                    <Project title={"topresOmsk.ru"}
                             description={" Business app for the sale of fuel resources"}
                             style={oil}
                             a={"https://topresomsk.ru"}
                    />

                </div>
            </div>
        </div>
    )
}