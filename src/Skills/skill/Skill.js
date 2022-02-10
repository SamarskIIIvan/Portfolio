import React from "react";
import style from './Skill.module.scss'
import Fade from 'react-reveal/Fade';

function Skill(props) {
    return (
        <div className = {style.skill}>
            <Fade>
        <div className = {style.icon} style={props.stile} />
            <div/>
            <h3 className={style.skillTitle}>
                {props.title}
            </h3>
            </Fade>
        </div>
    );
}

export default Skill;