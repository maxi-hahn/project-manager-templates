import useDarkMode from '../hooks/useDarkMode'


// ============================================================
// COMPONENTE: ThemeToggle
// ============================================================
// Botón para alternar entre tema claro y oscuro.
// ============================================================

const ThemeToggle = () => {
    const { theme, toggleTheme } = useDarkMode()

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    )
}

export default ThemeToggle