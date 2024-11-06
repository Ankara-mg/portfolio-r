import { useTranslation } from 'react-i18next';
import { HashLink as Link } from "react-router-hash-link";
import styles from './Landing.module.css';

const Landing = () => {
  const { t } = useTranslation('landing');

  return (
    <div className={styles.landingContainer} id='home'>
      <div className={styles.left}>
        <img src='/assets/images/landing-draw.png' alt='imagen' className={styles.image} />
      </div>

      <div className={styles.right}>
        <div className={styles.rightT}>
          {t('title')} <span className={styles.name}>Sol Román</span><br />
        </div>

        <div className={styles.rightM}>
          <a href="https://www.linkedin.com/in/sol-rom%C3%A1n-9a4b55221/" target='_blank' rel="noopener noreferrer" className={styles.link} >
            <img src="/assets/images/linkedin-icon.svg" alt="LinkedIn" className={styles.icon} />
          </a>
          <a href="https://github.com/Ankara-mg" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img src="/assets/images/github-icon.svg" alt="GitHub" className={styles.icon} />
          </a>
          <a href={t('cv')} target="_blank" rel="noopener noreferrer" className={styles.link} >
            <img src="/assets/images/cv-icon.svg" alt="CV" className={styles.icon} />
          </a>
        </div>

        <div className={styles.rightB}>
          Full Stack Developer

          <div className={styles.bottom}>
            {t('projects')}
            <Link to='#projects' smooth>
              <img src="/assets/images/arrows.png" alt={t('projects')} className={styles.iconArrow} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing;