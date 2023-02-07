import React from "react";
import style from './About.module.css';
import info from "./info";

const About = () => {
    return(
        <div className={style.container} id='about'>
            <h1>Sobre mí...</h1>
            <div className={style.aboutGrid}>
                {
                    info.map(i => {
                        return(
                            <div className={style.aboutSection} key={i.key}>
                                {
                                    i.key === 4 ?
                                    <div className={style.bubbleCont}>
                                        <div className={style.bubbleCont2}>
                                            <img src={i.icon} alt="icon" className={style.aboutIcon} />
                                            <div className={`${style.bubble} ${style.bubblePosition} ${style.hoverBubble}`}>
                                                Dato secreto: El nombre real de la loca de los gatos es Eleanor Abernathy. Estudió medicina y abogacía antes de obsesionarse con el alcohol y coleccionar gatos. ¡Quién lo diría!
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <img src={i.icon} alt="icon" className={style.aboutIcon} />
                                }
                                <h3 className={style.aboutTitle}>{i.title}</h3>
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