/**
 * i18n.js
 * Main internationalization configuration file,
 * File for translate texts according to the selected language
 */
import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

/**
 * i18n instance for internationalization
 * legacy: false to use Composition API
 * locale: default language
 * fallbackLocale: fallback language if the selected one is not available
 * messages: object with translations for each language
 */
const i18n = createI18n( {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, es }
});

export default i18n;