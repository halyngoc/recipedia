import React from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import Logo from './components/Logo'
import SearchButton from './components/SearchButton'
import styled from 'styled-components'
import { useDevice } from './util'

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.device === 'mobile' ? '0.75rem 1.25rem' : '3rem 3.5rem' };
`

function App() {
  const device = useDevice()

  return (
    <ThemeProvider theme={theme}>
      <Main device={device}>
        <GlobalStyles />
        <Logo />
        <SearchButton onClick={() => console.log('search button clicked')} />
      </Main>
    </ThemeProvider>
  )
}

export default App
