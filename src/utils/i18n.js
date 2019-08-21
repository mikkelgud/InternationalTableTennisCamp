import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/en';
import no from '../translations/no';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    resources: {
        en,
        no
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
