import React from "react";
import styles from './Landing.module.css';
import { HashLink as Link } from "react-router-hash-link";

const Landing = () => {
    return (
        <div className={styles.landingContainer} id='home'>
            <div className={styles.left}>
                <img src='/assets/images/landing-draw.png' alt='imagen' className={styles.image} />
            </div>

            <div className={styles.right}>
                <div className={styles.rightT}>
                    ¡Hola! Soy <span className={styles.name}>Sol Román</span><br/>
                </div>

                <div className={styles.rightM}>
                    <a href="https://www.linkedin.com/in/sol-rom%C3%A1n-9a4b55221/" target='_blank' rel="noopener noreferrer" className={styles.link} >
                        <img src="/assets/images/linkedin-icon.svg" alt="LinkedIn" className={styles.icon}/>
                    </a>
                    <a href="https://github.com/Ankara-mg" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <img src="/assets/images/github-icon.svg" alt="GitHub" className={styles.icon} />
                    </a>
                    <a href="https://drive.google.com/u/0/uc?id=1YqSukOM5h7udZoK8wxmh6pFJ2LtO31CC&export=download" target="_blank" rel="noopener noreferrer" className={styles.link} >
                        <img src="/assets/images/cv-icon.svg" alt="CV" className={styles.icon} />
                    </a>
                </div>

                <div className={styles.rightB}>
                    Full Stack Developer

                    <div className={styles.bottom}>
                        Mira mis proyectos 
                        <Link to='#projects' smooth>
                            <img src="/assets/images/arrows.png" alt="Ver mis proyectos" className={styles.iconArrow}/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landing;