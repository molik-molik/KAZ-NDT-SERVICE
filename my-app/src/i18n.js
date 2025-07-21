import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en.json';
import kz from './lang/kz.json';
import ru from './lang/ru.json';

const savedLang = localStorage.getItem('lang') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kz: { translation: kz },
      ru: { translation: ru }
    },
    lng: savedLang, // используем сохранённый язык
    fallbackLng: 'ru',
    interpolation: { escapeValue: false }
  });

export default i18n;