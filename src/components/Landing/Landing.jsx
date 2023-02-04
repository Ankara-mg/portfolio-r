import React from "react";
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.left}>
                <img src='/assets/images/landing-draw.png' alt='imagen' className={styles.image} />
            </div>

            <div className={styles.right}>
                ¡Hola! Soy <br/>
                <span className={styles.name}>Sol Román</span><br/>
                Web Developer
            </div>
        </div>
    )
}

export default Landing;