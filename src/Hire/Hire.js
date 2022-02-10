import React from "react";
import style from "./Hire.module.scss"
import {Title} from "../common/components/title/Title";




export function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={style.container}>
                        <Title title={"I am a available for Freelance"}/>
                <button type={"submit"}>Hire me</button>
            </div>
        </div>
    )
}