import React, { useState } from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import { RecipesProvider } from './RecipesContext'
import Dashboard from './components/pages/Dashboard'
import Browse from './components/pages/Browse'
import Search from './components/pages/Search'
import Favorites from './components/pages/Favorites'
import { useUsername } from './util'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [username, changeUsername] = useUsername()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false)

  const onSearch = query => {
    setSearchQuery(query)
    setCurrentPage('browse')
    setIsSearchPageVisible(false)
  }

  const onBrowseClick = () => {
    setSearchQuery('')
    setCurrentPage('browse')
  }

  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <GlobalStyles />
        {currentPage === 'dashboard' &&
          <Dashboard
            username={username}
            onChangeUsername={name => changeUsername(name)}
            onBrowseClick={onBrowseClick}
            onSeeFavoritesClick={() => setCurrentPage('favorites')}
            onSearchClick={() => setIsSearchPageVisible(true)}
          />}
        {currentPage === 'browse' &&
          <Browse
            searchQuery={searchQuery}
            onSearchClick={() => setIsSearchPageVisible(true)}
            onLogoClick={() => setCurrentPage('dashboard')}
          />}
        {currentPage === 'favorites' &&
          <Favorites
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
