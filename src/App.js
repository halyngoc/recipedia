import React from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import { useDevice } from './util'

function App() {
  const device = useDevice()

  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <h1>Hi, device is {device}.</h1>
      </main>
    </ThemeProvider>
  )
}

export default App
