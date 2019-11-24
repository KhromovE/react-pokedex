import { createEffect, sample, forward, combine } from 'effector'

import { getPokemonList, getPokemon } from '../api'
import { changeCount } from './pagination.events'
import { $offset, $limit } from './pagination.stores'
import { arrayToHashMap } from '../../../lib/utils'
import { $pokemonsList } from './pokemons.stores'
import { loadPokemonsList } from './pokemons.events'
import { createFetching, STATUSES } from '../../../lib/fetching'

const fxLoadPokemonList = createEffect({
  handler: async params => {
    const { results, count } = await getPokemonList(params)
    const pokemons = await Promise.all(Object.values(results).map(({ name }) => getPokemon(name)))

    return { pokemons, count }
  },
})

export const pokemonListFetching = createFetching(fxLoadPokemonList, STATUSES.LOADING)

$pokemonsList.on(fxLoadPokemonList.done, (_, { result: { pokemons } }) => {
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

forward({ from: fxLoadPokemonList.done, to: changeCount })
