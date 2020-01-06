import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Logo } from '../../../../ui/atoms'
import { capitalize } from '../../../../lib/utils'
import { Type } from '../../atoms'
import { Stat } from '..'

const FrontSide = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  z-index: 2;
  transform: rotateY(180deg);
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`

const SpriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: ${({ theme }) => theme.lighterGray};
`

const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

const TypeWrapper = styled.div`
  display: flex;
`

const Name = styled.span`
  font-size: 18px;
`

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`

export const PokemonCardFrontView = ({ pokemon }) => (
  <FrontSide>
    <Header>
      <Logo height="25" />
    </Header>
    <SpriteWrapper>{pokemon.image && <img src={pokemon.image} alt="" />}</SpriteWrapper>
    <DataWrapper>
      <Name>{capitalize(pokemon.name)}</Name>
      <TypeWrapper>
        {pokemon.types && pokemon.types.map(({ type }) => <Type key={type.name}>{type.name}</Type>)}
      </TypeWrapper>
    </DataWrapper>
    <StatsWrapper>
      {pokemon.stats &&
        pokemon.stats.map(({ baseStat, stat }) => (
          <Stat key={stat.name} name={stat.name}>
            {baseStat}
          </Stat>
        ))}
    </StatsWrapper>
  </FrontSide>
)

PokemonCardFrontView.propTypes = {
  pokemon: PropTypes.shape().isRequired,
}

export const PokemonCardFront = memo(PokemonCardFrontView)
