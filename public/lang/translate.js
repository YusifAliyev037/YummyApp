
import en from './en.json';
import az from './az.json';
import fr from './fr.json';

const translations = {
  en,
  az,
  fr,
};

export const translate = (key, locale = 'en') => {
  return translations[locale][key] || key;
};
