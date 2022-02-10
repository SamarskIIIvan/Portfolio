import React from "react";
import style from './Main.module.scss'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particleOpt = {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
            }
        }
    }
};

export function Main() {
    return (
        <div id={"main"}
            className={style.mainBlock}>
            <Particles
                className={style.particles}
                params={particleOpt}
            />
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There </span>
                        <span>I am Ivan <span>Samarskii</span></span>
                        <ReactTypingEffect text="Frontend Developer."/>
                    </div>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={style.photo}>
                            <div className={style.image}>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}


