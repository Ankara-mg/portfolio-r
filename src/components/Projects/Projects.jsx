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
                            <div className={style.leftImg}>
                                <img src={d.img} alt={d.titulo} className={style.proyImg} />
                            </div>

                            <div className={style.rightContainer}>
                                <h2 className={style.titles}>{d.titulo}</h2>
                                <p>{d.desc}</p>

                                <div className={style.techsContainer}>
                                    {
                                        d.techs.map(t => {
                                            return(
                                                <span className={style.techs}>{t}</span>
                                            )
                                        })
                                    }
                                </div>

                                <div className={style.btnContainer}>
                                    <a href={d.git} target='_blank' rel="noopener noreferrer" className={style.projBtn} >Ver Código Fuente</a>
                                    <a href={d.deploy}  target='_blank' rel="noopener noreferrer" className={style.projBtn} >Ver Proyecto</a>
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