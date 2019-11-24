import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PokemonCard } from '..'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const PokemonList = ({ list, isLoading, getPokemonList }) => {
  useEffect(() => {
    getPokemonList()
  }, [getPokemonList])

  return (
    <Wrapper>
      {list.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} isLoading={isLoading} />
      ))}
      {list.length === 0 && 'Nothing found'}
    </Wrapper>
  )
}

PokemonList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  getPokemonList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}
