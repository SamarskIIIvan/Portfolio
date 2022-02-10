import React from "react";
import style from "./Project.module.css"

export function Projects(){
    return(
        <div className={style.projectsBlock}>
          <div className={`${styleContainer.container} & {style.projectsContainer}`} >
             <h2 className={style.title}>Projects</h2>
              <div className={style.projects}>
                  

              </div>
          </div>

        </div>
    )
}