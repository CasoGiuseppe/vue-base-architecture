import { createI18n } from 'vue-i18n';
import es from './locales/es.json';

function loadLocaleMessages() {
  const locales = [{ es: es }];
  const messages: Record<string, any> = {};
  locales.forEach((lang) => {
    const key= Object.keys(lang)[0];
    messages[key] = lang[key as keyof typeof lang];
  });
  return messages;
}

export default createI18n({
    locale: import.meta.env.VITE_APP_LOCALE,
    fallbackLocale: import.meta.env.VITE_APP_LOCALE_FALLBACK,
    legacy: false,
    messages: loadLocaleMessages()
  });
