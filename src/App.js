import React, { Fragment } from 'react'
import { Provider } from 'mobx-react'

import { Main } from './ui/templates'

import { Header } from './ui/molecules'
import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider>
    <Fragment>
      <Main header={<Header />} />
      <GlobalStyle />
    </Fragment>
  </Provider>
)
