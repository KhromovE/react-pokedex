import { createStore } from 'effector'

import { LIMITS } from '../constants'

export const $count = createStore(0)
export const $offset = createStore(0)
export const $limit = createStore(LIMITS[0])
