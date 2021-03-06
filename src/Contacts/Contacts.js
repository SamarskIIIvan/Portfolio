import React from "react";
import style from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';



export function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div id={"contacts"}
                className={style.container}>
                <Title title={"Contacts"}/>
                <Fade>
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder={"Name"}/>
                    <input type="text" className={style.formArea} placeholder={"e-mail"}/>
                    <textarea className={style.messageArea} placeholder={"Message"}/>
                    <button type={"submit"}>Send message</button>
                </form>
            </Fade>
            </div>
        </div>
    )
}