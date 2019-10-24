import React from 'react'
import { Provider } from 'mobx-react'

import { Board } from './pages/board'
import { stores } from './stores'
import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider pokemonsStore={stores.pokemonsStore}>
    <>
      <Board />

      <GlobalStyle />
    </>
  </Provider>
)

export default App
