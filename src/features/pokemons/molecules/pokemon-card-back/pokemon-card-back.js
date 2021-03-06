import React, { memo } from 'react'
import styled from 'styled-components'

import { Logo } from '../../../../ui/atoms'

const BackSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1;
  background-color: #216091;
  border: 1px solid #013078;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`

export const PokemonCardBackView = () => (
  <BackSide>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <LogoWrapper>
      <Logo flip />
    </LogoWrapper>
  </BackSide>
)

export const PokemonCardBack = memo(PokemonCardBackView)
