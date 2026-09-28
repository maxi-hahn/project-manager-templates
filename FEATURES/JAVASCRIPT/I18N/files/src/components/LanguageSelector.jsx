import { useLanguage } from '../hooks/useLanguage'


// ============================================================
// COMPONENTE DE EJEMPLO: LanguageSelector
// ============================================================
// Muestra cómo usar el hook useLanguage para:
//   - Obtener el idioma actual.
//   - Traducir textos con t().
//   - Cambiar el idioma.
//
// Uso: colocalo donde quieras en tu app.
// ============================================================

const LanguageSelector = () => {
    const { language, changeLanguage, t } = useLanguage()

    return (
        <div>
            <p>{t('welcome')}</p>
            <p>Idioma actual: {language}</p>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('en')}>English</button>
        </div>
    )
}

export default LanguageSelector