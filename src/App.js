import React, { useState } from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import { RecipesProvider } from './RecipesContext'
import Dashboard from './components/pages/Dashboard'
import Browse from './components/pages/Browse'
import Search from './components/pages/Search'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [username] = useState('user') // TODO: Implement name change
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false)

  const onSearch = query => {
    setSearchQuery(query)
    setCurrentPage('browse')
    setIsSearchPageVisible(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <GlobalStyles />
        {currentPage === 'dashboard' &&
          <Dashboard
            username={username}
            onBrowseClick={() => setCurrentPage('browse')}
            onSeeFavoritesClick={() => console.log('see favorites clicked')}
            onSearchClick={() => setIsSearchPageVisible(true)}
          />}
        {currentPage === 'browse' &&
          <Browse
            searchQuery={searchQuery}
            onSearchClick={() => setIsSearchPageVisible(true)}
            onLogoClick={() => setCurrentPage('dashboard')}
          />}
        <Search
          isVisible={isSearchPageVisible}
          onSearch={onSearch}
          onEscape={() => setIsSearchPageVisible(false)}
        />
      </RecipesProvider>
    </ThemeProvider>
  )
}

export default App
