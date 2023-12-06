import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

export const ThemeContext = createContext('light')

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}
