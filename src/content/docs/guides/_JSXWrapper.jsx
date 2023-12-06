import ThemeProvider from './_ThemeProvider'

export default function JSXWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
