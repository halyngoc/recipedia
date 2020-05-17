import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  mobile: 600,
  tablet: 960,
  desktop: 1024,
}

export const theme = {
  background: '#FCF9ED', // light yellow
  background2: 'white',
  text: '#665C84',       // purple
  text2: 'white',
  accent: '#FF7657',     // orange
  accent2: '#FFBA5A',    // orange-yellow
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`

export const alignMargin = (align) => {
  switch (align) {
    case 'left':
      return '0 auto 0 0'
    case 'right':
      return '0 0 0 auto'
    default:
      return '0 auto'
  }
}
