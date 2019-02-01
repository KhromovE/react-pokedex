import React, { Fragment } from 'react'
import { Provider } from 'mobx-react'

import { stores } from './stores'
import { Main } from './ui/templates'
import { Header } from './ui/molecules'
import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider {...stores}>
    <Fragment>
      <Main header={<Header />} />
      <GlobalStyle />
    </Fragment>
  </Provider>
)
