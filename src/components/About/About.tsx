import { useTranslation } from 'react-i18next';
import style from './About.module.css';
import info from "./info";

const About = () => {
  const { t } = useTranslation('about');

  console.log(`about[${0}].title`)
  return (
    <div className={style.container} id='about'>
      <h1>{t('title')}</h1>
      <div className={style.aboutGrid}>
        {
          info.map(i => {
            return (
              <div className={style.aboutSection} key={i.key}>
                {
                  i.key === 3 ?
                    <div className={style.bubbleCont}>
                      <div className={style.bubbleCont2}>
                        <img src={i.icon} alt="icon" className={style.aboutIcon} />
                        <div className={`${style.bubble} ${style.bubblePosition} ${style.hoverBubble}`}>
                          {t('easterEgg')}
                        </div>
                      </div>
                    </div>
                    :
                    <img src={i.icon} alt="icon" className={style.aboutIcon} />
                }
                <h3 className={style.aboutTitle}>{t(`about.${i.key}.title`)}</h3>
                <span>{t(`about.${i.key}.text`)}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About