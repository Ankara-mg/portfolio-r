import React from "react";
import style from './About.module.css';
import info from "./info";

const About = () => {
    return(
        <div className={style.container}>
            <div className={style.aboutGrid}>
                {
                    info.map(i => {
                        return(
                            <div className={style.aboutSection} key={i.key}>
                                <img src={i.icon} alt="icon" className={style.aboutIcon} />
                                <span>{i.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About