import ThemeProvider from './ThemeProvider'

export default function JSXWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
