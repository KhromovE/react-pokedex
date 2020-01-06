import { createEvent, createStore, forward, combine } from 'effector'
import debounce from 'lodash.debounce'

import {
  $pokemonsList,
  $count,
  $limit,
  loadPokemonsList,
  pokemonListFetching,
  changeOffset,
  changeLimit,
} from '../../features/pokemons'

export const pageIsLoaded = createEvent()
export const paginationClicked = createEvent()
export const pageSizeChanged = createEvent()
export const searchFieldChanged = createEvent()
export const searchValueChanged = createEvent()

const debouncedSearchFieldChanged = debounce(searchValueChanged, 400)

export const $list = $pokemonsList.map(pokemons => Object.values(pokemons))
export const $listIsLoading = pokemonListFetching.$isLoading.map(isLoading => isLoading)
export const $pageNumber = combine({
  count: $count,
  limit: $limit,
}).map(({ count, limit }) => Math.ceil(count / limit))
export const $pageLimit = $limit
export const $searchValue = createStore('')

forward({
  from: pageIsLoaded,
  to: loadPokemonsList,
})

forward({
  from: paginationClicked,
  to: changeOffset,
})

forward({
  from: pageSizeChanged,
  to: changeLimit,
})

searchFieldChanged.watch(value => {
  debouncedSearchFieldChanged(value)
})

$searchValue.on(searchValueChanged, (_, value) => value)
