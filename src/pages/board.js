import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import { compose } from '../lib/utils'
import { PokemonList, LIMITS } from '../features/pokemons'
import { Pagination, PageSize, Search, Header } from '../ui/molecules'
import { Main, ActionsWrapper, SearchContainer } from '../ui/templates'

const enhance = compose(
  inject('pokemonsStore'),
  observer,
)

const BoardView = ({ pokemonsStore }) => (
  <Main header={<Header />}>
    <SearchContainer>
      <Search placeholder="Search" handleSearchChange={pokemonsStore.handleSearchChange} value={pokemonsStore.name} />
    </SearchContainer>
    <PokemonList
      getPokemonList={pokemonsStore.getPokemonList}
      list={pokemonsStore.list}
      loading={pokemonsStore.loading}
    />
    <ActionsWrapper>
      <Pagination count={pokemonsStore.pageNumber} handlePageChange={pokemonsStore.handlePageChange} />
      <PageSize items={LIMITS} handleLimitChange={pokemonsStore.handleLimitChange} limit={pokemonsStore.limit} />
    </ActionsWrapper>
  </Main>
)

BoardView.propTypes = {
  pokemonsStore: PropTypes.shape({
    getPokemonList: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNumber: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleLimitChange: PropTypes.func.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
}

export const Board = enhance(BoardView)
