import { sample, createStore } from 'effector'

import { LIMITS } from '../constants'
import { changeCount, changeLimit, changeOffset } from './pagination.events'

export const $count = createStore(0)
export const $offset = createStore(0)
export const $limit = createStore(LIMITS[0])

$count.on(changeCount, (_, count) => count)
$limit.on(changeLimit, (_, limit) => limit)

sample({
  source: $limit,
  clock: changeOffset,
  fn: (limit, number) => limit * number,
  target: $offset,
})
