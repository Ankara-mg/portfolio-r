import data from "./data";
import React from "react";
import style from './Projects.module.css';

const Projects = () => {
    return (
        <div className={style.container}>
            {
                data.map(p => {
                    return <div key={p.titulo}>{p.titulo}</div>
                })
            }
        </div>
    )
}

export default Projects;