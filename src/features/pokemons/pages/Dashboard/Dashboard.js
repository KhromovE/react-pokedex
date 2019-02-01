import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import { compose } from '../../../../lib/utils'
import { PokemonList } from '../../organisms'
import { Pagination, PageSize, Search } from '../../../../ui/molecules'
import { LIMITS } from '../../constants'

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

const SearchWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const enhance = compose(
  inject('pokedexStore'),
  observer,
)

const DashboardView = ({ pokedexStore }) => (
  <div>
    <SearchWrapper>
      <Search placeholder="Search" handleSearchChange={pokedexStore.handleSearchChange} value={pokedexStore.name} />
    </SearchWrapper>
    <PokemonList getPokemonList={pokedexStore.getPokemonList} list={pokedexStore.list} loading={pokedexStore.loading} />
    <ActionsWrapper>
      <Pagination count={pokedexStore.pageNumber} handlePageChange={pokedexStore.handlePageChange} />
      <PageSize items={LIMITS} handleLimitChange={pokedexStore.handleLimitChange} limit={pokedexStore.limit} />
    </ActionsWrapper>
  </div>
)

DashboardView.propTypes = {
  pokedexStore: PropTypes.shape({
    getPokemonList: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNumber: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleLimitChange: PropTypes.func.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
  }),
}

export const Dashboard = enhance(DashboardView)
