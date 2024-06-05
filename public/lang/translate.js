
import en from './en.json';
import az from './az.json';
import tr from './tr.json';
import de from './de.json';
import is from './is.json'


const translations = {
  en,
  az,
  tr,
  de,
  is,

};

export const translate = (key, locale = 'en') => {
  return translations[locale][key] || key;
};
