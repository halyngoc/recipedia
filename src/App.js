import React from 'react'
import { theme, GlobalStyles } from './global'
import { ThemeProvider } from 'styled-components'
import Logo from './components/Logo'
import SearchButton from './components/SearchButton'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin: ${props => props.device === 'mobile' ? '1rem 1.25rem' : '3rem 3.25rem' };
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <GlobalStyles />
        <Logo />
        <SearchButton />
      </Main>
    </ThemeProvider>
  )
}

export default App
