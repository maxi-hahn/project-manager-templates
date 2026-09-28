import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from '../contexts/LanguageContext'


export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage debe usarse dentro de LanguageProvider')
    }
    const { t } = useTranslation()
    return { ...context, t }
}