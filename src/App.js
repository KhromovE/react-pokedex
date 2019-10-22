import React from 'react'
import { Provider } from 'mobx-react'

import { Main } from './ui/templates'
import { Board } from './pages/board'
import { Header } from './ui/molecules'
import { stores } from './stores'
import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider pokemonsStore={stores.pokemonsStore}>
    <>
      <Main header={<Header />}>
        <Board />
      </Main>
      <GlobalStyle />
    </>
  </Provider>
)

export default App
