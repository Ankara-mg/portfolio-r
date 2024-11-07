import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import style from './Skills.module.css';
import data from './data';

const Skills = () => {
  const { t } = useTranslation('skills');

  return (
    <div className={style.skills} id="skills">
      <h1>{t('title')}</h1>
      <div className={style.container}>
        {data.map((data) => (
          <div key={data.category} className={style.category}>
            <h2 className={style.categoryTitle}>{data.category}</h2>
            <div className={style.skillsGrid}>
              {data.skills.map((skill) => (
                <div key={skill.name} className={style.newSkill}>
                  <div className={style.techIcon}>{parse(skill.icon)}</div>
                  <span className={style.title}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills