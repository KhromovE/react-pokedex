import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PokemonCard } from '../../molecules'
import { loadPokemonsList } from '../../model/pokemons'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const PokemonList = ({ list, loading, getPokemonList }) => {
  useEffect(() => {
    getPokemonList()
    loadPokemonsList()
  }, [getPokemonList])
  return (
    <Wrapper>
      {list.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} loading={loading} />
      ))}
      {list.length === 0 && 'Nothing found'}
    </Wrapper>
  )
}

PokemonList.propTypes = {
  getPokemonList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
}
