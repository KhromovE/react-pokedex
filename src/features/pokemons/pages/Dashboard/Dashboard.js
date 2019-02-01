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
  inject('pokemonsStore'),
  observer,
)

const DashboardView = ({ pokemonsStore }) => (
  <div>
    <SearchWrapper>
      <Search placeholder="Search" handleSearchChange={pokemonsStore.handleSearchChange} value={pokemonsStore.name} />
    </SearchWrapper>
    <PokemonList
      getPokemonList={pokemonsStore.getPokemonList}
      list={pokemonsStore.list}
      loading={pokemonsStore.loading}
    />
    <ActionsWrapper>
      <Pagination count={pokemonsStore.pageNumber} handlePageChange={pokemonsStore.handlePageChange} />
      <PageSize items={LIMITS} handleLimitChange={pokemonsStore.handleLimitChange} limit={pokemonsStore.limit} />
    </ActionsWrapper>
  </div>
)

DashboardView.propTypes = {
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
  }),
}

export const Dashboard = enhance(DashboardView)
