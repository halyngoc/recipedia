import React from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import { RecipesProvider } from './RecipesContext'
import Dashboard from './Dashboard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <GlobalStyles />
        <Dashboard />
      </RecipesProvider>
    </ThemeProvider>
  )
}

export default App
