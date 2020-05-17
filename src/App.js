import React, { useState, useEffect } from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import Logo from './components/Logo'
import SearchButton from './components/SearchButton'
import styled from 'styled-components'
import { useDevice } from './util'
import { Container } from './components/Container'
import Hero from './components/Hero'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.device === 'mobile' ? '0.75rem 1.25rem' : '3rem 3.5rem'};
`

function App() {
  const device = useDevice()
  const [name, setName] = useState('')

  useEffect(() => setName('Ha'), []) // TODO: Replace this with actual user's name

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container device={device} align="right" alignItems="center">
        <Header device={device}>
          <Logo />
          <SearchButton onClick={() => console.log('search button clicked')} />
        </Header>
        <main>
          <Hero
            name={name}
            onBrowseClick={() => console.log('browse button clicked')}
            onSeeFavoritesClick={() => console.log('see favorites button clicked')}
          />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
