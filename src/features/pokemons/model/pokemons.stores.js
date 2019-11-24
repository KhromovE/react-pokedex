import { createStore } from 'effector'

import { LIMITS } from '../constants'

const prepareList = (count = 0) => {
  return Array(count)
    .fill(1)
    .reduce((acc, _, index) => ({ ...acc, [index]: { name: `name-${index}` } }), {})
}

const initList = prepareList(LIMITS[0])

export const $pokemonsList = createStore(initList)
