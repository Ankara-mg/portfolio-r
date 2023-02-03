import React from "react";
import style from './Skills.module.css';
import data from "./data";

const Skills = () => {
    return(
        <div className={style.skills}>
            <div className={style.container}>
                {
                    data.map(d => {
                        return (
                            <div key={d.name} className={style.newSkill} >
                                <img src={d.icon} alt={d.name} className={style.techIcon} />
                                <span className={style.title}>{d.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills