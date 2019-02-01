import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  padding: 1rem;
  border: 1px solid black;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
  }
  @media (max-width: 900px) and (min-width: 500px) {
    width: calc(50% - 2.65rem);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media (min-width: 901px) {
    width: calc(33% - 2.62rem);

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

export const PokemonCard = ({ pokemon }) => (
  <Wrapper>{pokemon.sprites && <img src={pokemon.sprites.front_default} alt="" />}</Wrapper>
)

PokemonCard.propTypes = {
  pokemon: PropTypes.shape().isRequired,
}
