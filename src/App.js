import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Board } from './pages'
import { GlobalStyle } from './global-styles'
import { theme } from './theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <Board />
    <GlobalStyle />
  </ThemeProvider>
)

export default App
