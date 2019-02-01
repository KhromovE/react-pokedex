import React from 'react'
import styled from 'styled-components'

import logo from '../../../assets/logo.svg'

const Img = styled.img`
  height: ${({ height = '60' }) => height}px;
`

export const Logo = () => <Img src={logo} alt="pokemon" />
