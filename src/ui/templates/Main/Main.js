import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '..'

const Body = styled.main`
  background-color: ${({ theme }) => theme.white};
  padding: 1.8rem;

  @media (max-width: 580px) {
    padding: 1.8rem 1rem;
  }
`

export const MainView = ({ children, header }) => (
  <>
    {header}
    <Container>
      <Body>{children}</Body>
    </Container>
  </>
)

MainView.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
}

export const Main = memo(MainView)
