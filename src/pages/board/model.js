import { createEvent, forward, combine } from 'effector'

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
export const paginationWasClicked = createEvent()
export const pageSizeWasChanged = createEvent()

forward({
  from: pageIsLoaded,
  to: loadPokemonsList,
})

forward({
  from: paginationWasClicked,
  to: changeOffset,
})

forward({
  from: pageSizeWasChanged,
  to: changeLimit,
})

export const $list = $pokemonsList.map(pokemons => Object.values(pokemons))
export const $listIsLoading = pokemonListFetching.$isLoading.map(isLoading => isLoading)
export const $pageNumber = combine({
  count: $count,
  limit: $limit,
}).map(({ count, limit }) => Math.ceil(count / limit))
export const $pageLimit = $limit
