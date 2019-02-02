import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PokemonCardBack, PokemonCardFront } from '..'

const Card = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 1.8rem;
  margin-bottom: 1.8rem;
  min-height: 420px;
  perspective: 1000px;

  @media (max-width: 580px) {
    width: 100%;
    margin-right: 0;
  }
  @media (max-width: 900px) and (min-width: 581px) {
    width: calc(50% - 0.9rem);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (min-width: 901px) {
    width: calc(33% - 1.03rem);

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ loading }) => (!loading ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`

export const PokemonCard = ({ pokemon, loading }) => (
  <Card>
    <CardInner loading={loading}>
      <PokemonCardBack />
      <PokemonCardFront pokemon={pokemon} />
    </CardInner>
  </Card>
)

PokemonCard.propTypes = {
  pokemon: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
}
