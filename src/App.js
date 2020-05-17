import React, { useState, useEffect } from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import Logo from './components/Logo'
import SearchButton from './components/SearchButton'
import styled from 'styled-components'
import { useDevice } from './util'
import { Container } from './components/Container'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'

const AppContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  article {
    padding: ${props => props.device === 'mobile' ? '0.75rem 1.25rem' : '3rem 3.5rem'};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`

function App() {
  const device = useDevice()
  const [name, setName] = useState('')

  useEffect(() => setName('Ha'), []) // TODO: Replace this with actual user's name

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Container device={device} align="right" alignItems="center">
          <article>
            <header>
              <Logo />
              <SearchButton onClick={() => console.log('search button clicked')} />
            </header>
            <main>
              <Hero
                name={name}
                onBrowseClick={() => console.log('browse button clicked')}
                onSeeFavoritesClick={() => console.log('see favorites button clicked')}
              />
            </main>
          </article>
        </Container>
        <aside><Sidebar /></aside>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
