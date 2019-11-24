import { sample } from 'effector'

import { $count, $limit, $offset } from './pagination.stores'
import { changeCount, changeLimit, changeOffset } from './pagination.events'

$count.on(changeCount, (_, { result: { count } }) => count)
$limit.on(changeLimit, (_, limit) => limit)

sample({
  source: $limit,
  clock: changeOffset,
  fn: (limit, number) => limit * number,
  target: $offset,
})
