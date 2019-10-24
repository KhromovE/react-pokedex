import { createEvent, createStore, createStoreObject } from 'effector'

import { LIMITS } from '../constants'

export const loadedCount = createEvent()
export const changedOffset = createEvent()
export const changedLimit = createEvent()

const $count = createStore(0)
const $offset = createStore(0)
const $limit = createStore(LIMITS[0])

export const $pagination = createStoreObject({ count: $count, offset: $offset, limit: $limit })
