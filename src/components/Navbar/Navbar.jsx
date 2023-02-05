import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import style from './Navbar.module.css';

const Navbar = () => {
    const [show, setShow] = useState(true);
  
    const hideNav = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 300) {
          setShow(false); 
        } else {
          setShow(true);  
        }
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', hideNav);
  
        return () => {
          window.removeEventListener('scroll', hideNav);
        };
      }
    }, [window.scrollY]);

    return(
        <div className={`${style.navShow} ${show && style.navHide}`} >
            <Link to='#contact' smooth className={style.link} >
                <span>Contacto</span>
            </Link>

            <Link to='#projects' smooth className={style.link}>
                <span>Proyectos</span>
            </Link>

            <Link to='#skills' smooth className={style.link}>
                <span>Habilidades</span>
            </Link>

            <Link to='#about' smooth className={style.link}>
                <span>Sobre mí</span>
            </Link>

            <Link to='#home' smooth className={style.link}>
                <span>Inicio</span>
            </Link>
        </div>
    )
}

export default Navbar;