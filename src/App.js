import React, { Fragment } from 'react'
import { Provider } from 'mobx-react'

import { GlobalStyle } from './global-styles'

export const App = () => (
  <Provider>
    <Fragment>
      <div>foobar</div>
      <GlobalStyle />
    </Fragment>
  </Provider>
)
