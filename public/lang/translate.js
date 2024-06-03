
import en from './en.json';
import az from './az.json';
import fr from './fr.json';
// import de from './de.json';

const translations = {
  en,
  az,
  fr,
  // de,
};

export const translate = (key, locale = 'en') => {
  return translations[locale][key] || key;
};
