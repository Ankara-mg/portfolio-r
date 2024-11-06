import { useTranslation } from 'react-i18next';
import style from './Projects.module.css';
import data from './data';

const Projects = () => {
  const { t } = useTranslation('projects');

  return (
    <div className={style.container} id='projects'>
      <h1>{t('pageTitle')}</h1> <br />

      {
        data.map((d, key: number) => {
          return (
            <div className={style.projectBox} key={key}>
              <div className={style.leftImg}>
                <img src={d.img} alt={t(`${d.id}.title`)} className={style.proyImg} />
              </div>

              <div className={style.rightContainer}>
                <h2 className={style.titles}>{t(`${d.id}.title`)}</h2>
                <p>{t(`${d.id}.description`)}</p>

                <div className={style.techsContainer}>
                  {
                    d.techs.map((t: string) => {
                      return (
                        <span className={style.techs} key={t}>{t}</span>
                      )
                    })
                  }
                </div>

                <div className={style.btnContainer}>
                  <a href={d.git} target='_blank' rel="noopener noreferrer" className={style.projBtn} >{t('source')}</a>
                  <a href={d.deploy} target='_blank' rel="noopener noreferrer" className={style.projBtn} >{t('web')}</a>
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