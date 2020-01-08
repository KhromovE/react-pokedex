import { createEvent } from 'effector'

import { changeLimit, changeOffset, changeCount } from './pagination.events'
import { $limit, $offset, $count } from './pagination.model'
import { LIMITS } from '../constants'

describe('pagination', () => {
  const resetLimit = createEvent()
  $limit.reset(resetLimit)

  beforeEach(() => {
    resetLimit()
  })

  describe('count', () => {
    test('should change count on changeLimit', () => {
      expect($count.getState()).toBe(0)
      changeCount(100)
      expect($count.getState()).toBe(100)
    })
  })

  describe('limit', () => {
    test('should change limit on changeLimit', () => {
      expect($limit.getState()).toBe(LIMITS[0])
      changeLimit(2)
      expect($limit.getState()).toBe(2)
    })
  })

  describe('offset', () => {
    test('should change offset on changeOffset', () => {
      expect($offset.getState()).toBe(0)
      changeOffset(2)
      expect($offset.getState()).toBe(LIMITS[0] * 2)
    })
  })
})
