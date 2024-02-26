import { useI18n } from 'vue-i18n';
import type { ITranslation } from './interfaces/ITranslation.interface';
import i18n from '@translation/index';
export default function useTranslation(): ITranslation {
    const { global: { availableLocales, locale }} = i18n;
    const { t, te } = useI18n({
        inheritLocale: true,
        useScope: 'local'
    });

    
    /**
     * Method to return locale translation string
     * @date 26/2/2024 - 0:48:07
     * @param {string} key - translation locale key name
     * @param {string} option - record of parameters for locale translation options
     * @returns {string} - translation string or default value if locale translation is not found
     */
    const translate = ({ key, options = {} }:{ key: string, options?: Record<string, unknown>}): string => {
        return te(key) ? t(key, options) : `no translation was found for ${key} key`
    }


    /**
     * Method to set a new translation locale value
     * @date 26/2/2024 - 1:31:03
     * @param {string} newLocale - new translation locale value
     * @returns {void}
     */
    const setNewTranslationLocale = ( newLocale: string ): void => {
        const checkLocaleExist = availableLocales.includes(newLocale);
        if(!checkLocaleExist) throw new Error(`new locale ${newLocale} is not available`);
        locale.value = newLocale
    }

    return { translate, setNewTranslationLocale }
}