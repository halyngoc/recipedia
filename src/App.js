import React from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import Logo from './components/Logo'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <Logo />
      </main>
    </ThemeProvider>
  )
}

export default App
