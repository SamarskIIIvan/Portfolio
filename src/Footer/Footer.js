import React from "react";
import style from "./Footer.module.scss"
import {Title} from "../common/components/title/Title";
import telegramLogo from "../assets/image/icons8-aplicación-telegrama.svg"
import linkedInIcon from "../assets/image/icons8-linkedin.svg"
import whatsAppLogo from "../assets/image/icons8-whatsapp.svg"



export function Footer(){
    return(
        <div className={style.footer}>
            <div className= {style.container}>
                <Title title={"Ivan Samarskii"}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={telegramLogo} alt="telegram"/>
                        </a>
                        </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={linkedInIcon} alt="linkedIn"/>
                        </a>
                        </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={whatsAppLogo} alt="whatsapp"/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved</span>
            </div>
        </div>
    )
}