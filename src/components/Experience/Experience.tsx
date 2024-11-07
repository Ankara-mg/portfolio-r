import { useTranslation } from 'react-i18next';
import { experiences, studies } from './data';
import style from './Experience.module.css';

const Experience = () => {
  const { t } = useTranslation('experience');

  return (
    <div className={style.background}>
      <div style={{ textAlign: "center" }}>
        <h1>{t('pageTitle')}</h1>
      </div>

      <div className={style.grid}>
        <div className={style.section}>
          <h2 className={style.titleSection}>{t('experiencesTitle')}</h2>
          <div className={style.list}>
            {experiences.map((exp) => (
              <div key={exp.id} className={style.item}>
                <h3>{t(`${exp.id}.position`)} - {t(`${exp.id}.company`)}</h3>
                <p className={style.date}>{t(`${exp.id}.date`)}</p>
                <p>{t(`${exp.id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.section}>
          <h2 className={style.titleSection}>{t('studiesTitle')}</h2>
          <div className={style.list}>
            {studies.map((study) => (
              <div key={study.id} className={style.item}>
                <h3>{t(`${study.id}.name`)} - {t(`${study.id}.institute`)}</h3>
                <p className={style.date}>{t(`${study.id}.date`)}</p>
                <p>{t(`${study.id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
