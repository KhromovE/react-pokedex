import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '..'

const Body = styled.main`
  background-color: white;
  padding: 1.8rem;

  @media (max-width: 580px) {
    padding: 1.8rem 1rem;
  }
`

export const Main = ({ children, header }) => (
  <Fragment>
    {header}
    <Container>
      <Body>{children}</Body>
    </Container>
  </Fragment>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
}
