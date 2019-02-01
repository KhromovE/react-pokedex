import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { LIGHT_GRAY, LIGHTER_GRAY, DARK_GRAY } from '../../../../colors'
import { Logo } from '../../../../ui/atoms'
import { capitalize } from '../../../../lib/utils'
import { Type } from '../../atoms'
import { Stat } from '..'

/* eslint-disable camelcase */

const FrontSide = styled.div`
  position: absolute;
  width: calc(100% - 2px);
  height: 100%;
  backface-visibility: hidden;
  z-index: 1;
  transform: rotateY(180deg);
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 4px;
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
  background-color: ${LIGHTER_GRAY};
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
  color: ${DARK_GRAY};
  font-size: 18px;
`

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`

export const PokemonCardFront = ({ pokemon }) => (
  <FrontSide>
    <Header>
      <Logo height="25" />
    </Header>
    <SpriteWrapper>{pokemon.sprites && <img src={pokemon.sprites.front_default} alt="" />}</SpriteWrapper>
    <DataWrapper>
      <Name>{capitalize(pokemon.name)}</Name>
      <TypeWrapper>
        {pokemon.types && pokemon.types.map(({ type }) => <Type key={type.name}>{type.name}</Type>)}
      </TypeWrapper>
    </DataWrapper>
    <StatsWrapper>
      {pokemon.stats &&
        pokemon.stats.map(({ base_stat, stat }) => (
          <Stat key={stat.name} name={stat.name}>
            {base_stat}
          </Stat>
        ))}
    </StatsWrapper>
  </FrontSide>
)

PokemonCardFront.propTypes = {
  pokemon: PropTypes.shape().isRequired,
}
