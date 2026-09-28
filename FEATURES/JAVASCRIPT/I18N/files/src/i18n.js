import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import esCommon from './locales/es/common.json'
import enCommon from './locales/en/common.json'


const resources = {
    es: { common: esCommon },
    en: { common: enCommon },
}

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || 'es',
    fallbackLng: 'es',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
})

export default i18n