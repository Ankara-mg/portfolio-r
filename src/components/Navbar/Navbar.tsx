import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import style from './Navbar.module.css';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(true);

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

  return (
    <>
      <div className={`${style.navShow} ${show && style.navHide}`} >
        <div>
          <LanguageSwitch />
        </div>

        <div>
          <Link to='#home' smooth className={style.link}>
            <span>{t('home')}</span>
          </Link>

          <Link to='#projects' smooth className={style.link}>
            <span>{t('projects')}</span>
          </Link>

          <Link to='#about' smooth className={style.link}>
            <span>{t('about')}</span>
          </Link>

          <Link to='#skills' smooth className={style.link}>
            <span>{t('skills')}</span>
          </Link>

          <Link to='#contact' smooth className={style.link}>
            <span>{t('contact')}</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;