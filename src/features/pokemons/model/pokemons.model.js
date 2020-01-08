import { createEffect, sample, forward, combine, createStore } from 'effector'

import { getPokemonList, getPokemon } from '../api'
import { changeCount } from './pagination.events'
import { $offset, $limit } from './pagination.model'
import { arrayToHashMap } from '../../../lib/utils'
import { loadPokemonsList, findPokemon } from './pokemons.events'
import { createFetching, STATUSES } from '../../../lib/fetching'
import { LIMITS } from '../constants'

const prepareList = (count = 0) => {
  return Array(count)
    .fill(1)
    .reduce((acc, _, index) => ({ ...acc, [index]: { name: `name-${index}` } }), {})
}

const initList = prepareList(LIMITS[0])
export const $pokemonsList = createStore(initList)

const fxLoadPokemonList = createEffect({
  handler: async params => {
    const { results, count } = await getPokemonList(params)
    const pokemons = await Promise.all(Object.values(results).map(({ name }) => getPokemon(name)))

    return { pokemons, count }
  },
})

const fxFindPokemon = createEffect({
  handler: getPokemon,
})

export const pokemonListFetching = createFetching(fxLoadPokemonList, STATUSES.LOADING)
export const pokemonFetching = createFetching(fxFindPokemon, STATUSES.INITIAL)

$pokemonsList
  .on(fxLoadPokemonList.done, (_, { result: { pokemons } }) => arrayToHashMap(pokemons, 'name'))
  .on(fxFindPokemon.done, (_, { result }) => {
    const pokemons = []

    if (result !== null) {
      pokemons.push(result)
    }

    return arrayToHashMap(pokemons, 'name')
  })

const $pagination = combine({ offset: $offset, limit: $limit })

// triggers loading a pokemon list with offset and limit
sample({
  source: $pagination,
  clock: loadPokemonsList,
  fn: ({ offset, limit }) => ({ offset, limit }),
  target: fxLoadPokemonList,
})

// triggers loading the pokemon list when the offset or limit has been updated
sample({
  source: $pagination,
  clock: $pagination.updates,
  fn: ({ offset, limit }) => ({ offset, limit }),
  target: fxLoadPokemonList,
})

fxLoadPokemonList.done.watch(result => {
  changeCount(result.count)
})

findPokemon.watch(query => {
  if (query.length > 0) {
    fxFindPokemon(query)
  } else {
    loadPokemonsList()
  }
})
