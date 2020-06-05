import React, { useState } from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import { RecipesProvider } from './RecipesContext'
import Dashboard from './components/pages/Dashboard'
import Browse from './components/pages/Browse'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [username] = useState('user') // TODO: Implement name change

  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <GlobalStyles />
        {currentPage === 'dashboard' &&
          <Dashboard
            username={username}
            onBrowseClick={() => setCurrentPage('browse')}
            onSeeFavoritesClick={() => console.log('see favorites clicked')}
            onSearchClick={() => console.log('search clicked')}
          />}
        {currentPage === 'browse' &&
          <Browse
            searchQuery="vegan"
            onSearchClick={() => console.log('search clicked')}
            onLogoClick={() => setCurrentPage('dashboard')}
          />}
      </RecipesProvider>
    </ThemeProvider>
  )
}

export default App
