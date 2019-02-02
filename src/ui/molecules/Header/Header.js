import React from 'react'
import styled from 'styled-components'

import { Container } from '../../templates'
import { Logo } from '../../atoms'

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  background-color: #ef5350;

  @media (max-width: 580px) {
    padding-left: 1rem;
  }
`

export const Header = () => (
  <Wrapper>
    <Container>
      <Logo />
    </Container>
  </Wrapper>
)
