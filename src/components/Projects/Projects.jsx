import data from "./data";
import React from "react";
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.container}>
            <h1>Proyectos</h1> <br/>
            <div className={style.pContainer}>
                {
                    data.map(d => {
                        return(
                            <div className={style.projBox} key={d.titulo}>
                                <div>
                                    <img src={d.img} alt={d.titulo} className={style.projectImg} />
                                </div>
                                <div className={style.rightSide}>
                                    <div className={style.projectTitle}>{d.titulo}</div>
                                    <div className={style.projectDesc}>{d.desc}</div>
                                    <form className={style.buttons}>
                                        <a href={d.deploy} target="_blank" rel="noopener noreferrer" className={style.projBtn}>Ver proyecto</a>
                                        <a href={d.git} target="_blank" rel="noopener noreferrer" className={style.projBtn}>Ver código fuente</a>
                                    </form>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;