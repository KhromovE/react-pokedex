import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import { compose } from '../../../../lib/utils'
import { PokemonList } from '../../organisms'
import { Pagination } from '../../../../ui/molecules'

const enhance = compose(
  inject('pokedexStore'),
  observer,
)

const DashboardView = ({ pokedexStore }) => (
  <div>
    <PokemonList getPokemonList={pokedexStore.getPokemonList} list={pokedexStore.list} loading={pokedexStore.loading} />
    <Pagination count={pokedexStore.pageNumber} handlePageChange={pokedexStore.handlePageChange} />
  </div>
)

DashboardView.propTypes = {
  pokedexStore: PropTypes.shape({
    getPokemonList: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageNumber: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }),
}

export const Dashboard = enhance(DashboardView)
