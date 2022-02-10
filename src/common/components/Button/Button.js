import React from "react";
import style from "./Button.module.scss"


export function Button(props){
    return(
        <a href={props.a} className={style.btn}>{props.title}</a>
    )
}