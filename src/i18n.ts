import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Languagedetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ['common'],
    supportedLngs: ['vi', 'en'],
    fallbackNS: 'vi',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });
