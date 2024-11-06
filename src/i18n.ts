import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextHttpBackend from 'i18next-http-backend';

// Usaremos un objeto de traducción estático para depurar el problema



i18n
  .use(i18nextHttpBackend) // Usar el backend para cargar los archivos de traducción
  .use(initReactI18next)   // Inicialización para React con i18next
  .init({
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
     // Objetos de traducción
     ns: ['navbar', 'landing', 'errors'], // Namespaces que se cargarán
     defaultNS: 'navbar', // Namespace por defecto
     backend: {
       loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta dinámica para cargar archivos de traducción
     },
 
    interpolation: {
      escapeValue: false, // React maneja la seguridad de las variables
    },
  })
  .then(() => {
    console.log('i18next se ha inicializado correctamente');
  })
  .catch((error) => {
    console.error('Error al inicializar i18next:', error);
  });


export default i18n;
