import { useTranslation } from 'react-i18next';
import style from './LanguageSwitch.module.css'

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
      .then(() => {
        console.log(`Idioma cambiado a: ${lng}`);
      })
      .catch((error) => {
        console.error('Error al cambiar el idioma:', error);
      });
  };

  return (
    <div className={style.container}>
      <button onClick={() => handleChangeLanguage('es')} className={`${style.flagBtn} ${i18n.language === 'es' ? style.selected : ''}`}>
        <img src="/assets/flags/es.svg" alt="Español" width={40} height={30} />
      </button>
      <button onClick={() => handleChangeLanguage('en')} className={`${style.flagBtn} ${i18n.language === 'en' ? style.selected : ''}`}>
        <img src="/assets/flags/en.svg" alt="English" width={40} height={30} />
      </button>
    </div>
  );
};

export default LanguageSwitch;
