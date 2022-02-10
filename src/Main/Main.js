import React from "react";
import style from './Main.module.scss'
import Particles from 'react-tsparticles';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


export function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>
            <Particles className={style.particles}
                       params={{
                           fpsLimit: 100,
                           particles: {
                               color: {
                                   value: "#fff"
                               },
                               links: {
                                   enable: true,
                                   color: "#fff",
                                   distance: 150
                               },
                               move: {
                                   enable: true
                               }
                           }
                       }}
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


