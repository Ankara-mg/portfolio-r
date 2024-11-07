import i18n from 'i18next';
import i18nextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'es',
    fallbackLng: 'es',
    defaultNS: 'navbar',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log('i18next se ha inicializado correctamente');
  })
  .catch((error) => {
    console.error('Error al inicializar i18next:', error);
  });

export default i18n;
