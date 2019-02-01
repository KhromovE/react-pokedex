import React, { Fragment } from 'react'
import { Provider } from 'mobx-react'

import { Main } from './ui/templates'
import { Dashboard } from './features/pokemons'
import { Header } from './ui/molecules'
import { stores } from './stores'
import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider {...stores}>
    <Fragment>
      <Main header={<Header />}>
        <Dashboard />
      </Main>
      <GlobalStyle />
    </Fragment>
  </Provider>
)

export default App
