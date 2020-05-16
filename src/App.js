import React from 'react';
import { theme, GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <h1>Hi</h1>
      </main>
    </ThemeProvider>
  );
}

export default App;
