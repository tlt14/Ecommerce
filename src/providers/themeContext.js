import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    function toggleTheme(option) {
      setTheme(option)
      console.log('theme >>>', theme)
      localStorage.setItem('theme', theme)
      theme === 'light'
        ? document.body.classList.remove('dark')
        : document.body.classList.toggle('dark')
    }
    toggleTheme(theme)
  }, [theme])
  console.log('theme >>>', theme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
