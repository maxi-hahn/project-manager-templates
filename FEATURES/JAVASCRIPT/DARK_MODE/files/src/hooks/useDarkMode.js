import { useEffect, useState } from 'react'


// ============================================================
// HOOK: useDarkMode
// ============================================================
// Maneja el tema claro/oscuro con persistencia en localStorage.
//
// Uso:
//     const { theme, toggleTheme } = useDarkMode()
// ============================================================

const useDarkMode = () => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return { theme, toggleTheme }
}

export default useDarkMode