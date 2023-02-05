import data from "./data";
import React from "react";
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.container} id='projects'>
            <h1>Proyectos</h1> <br/>

            {
                data.map(d => {
                    return(
                        <div className={style.projectBox}>
                            <div className={style.top}>
                                <h2 className={style.projectTitle}>{d.titulo}</h2>
                            </div>

                            <div className={style.middle}>
                                <img src={d.img} alt={d.titulo} />
                            </div>

                            <div className={style.bottom}>
                                <span>Tecnologías Utilizadas</span>
                                <div className={style.techsContainer}>
                                    {
                                        d.techs.map(t => {
                                            return(
                                                <div className={style.techs}>{t}</div>
                                            )
                                        })
                                    }
                                </div>

                                <div className={style.btnContainer}>
                                    <a href={d.git} target="_blank" rel="noopener noreferrer" > <button className={style.projBtn}>Ver código fuente</button> </a>
                                    <a href={d.deploy} target="_blank" rel="noopener noreferrer"> <button className={style.projBtn}>Ver proyecto</button> </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;