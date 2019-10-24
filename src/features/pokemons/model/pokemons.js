import { createEvent, createStore, createEffect, sample } from 'effector'

import { getPokemonList } from '../api'
import { $pagination } from './pagination'

export const loadPokemonsList = createEvent()

export const $pokemonsList = createStore([])

const fxLoadPokemonList = createEffect({
  handler: params => getPokemonList(params),
})

$pokemonsList.on(fxLoadPokemonList.done, (_, { result: value }) => value)

// trigger loading a pokemon list with offset and limit
sample({
  source: $pagination,
  clock: loadPokemonsList,
  fn: ({ offset, limit }) => ({ offset, limit }),
  target: fxLoadPokemonList,
})
