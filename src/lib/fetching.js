import { createStore, createEvent } from 'effector'

export const STATUSES = {
  INITIAL: 'initial',
  DONE: 'done',
  FAIL: 'fail',
  LOADING: 'loading',
}

export const createFetching = (effect, initialStatus = STATUSES.INITIAL, params = {}) => {
  const customReset = params.reset || createEvent()

  const result = createStore(params.result || null)
    .reset(effect)
    .reset(effect.fail)
    .reset(customReset)
    .on(effect.done, (_, { result: value }) => value)

  const error = createStore(params.error || null)
    .reset(effect)
    .reset(effect.done)
    .reset(customReset)
    .on(effect.fail, (_, { error: value }) => value)

  const status = createStore(initialStatus)
    .on(effect, () => STATUSES.LOADING)
    .on(effect.done, () => STATUSES.DONE)
    .on(effect.fail, () => STATUSES.FAIL)
    .on(customReset, () => STATUSES.INITIAL)

  const $isDone = status.map(state => state === STATUSES.DONE)
  const $isFailed = status.map(state => state === STATUSES.FAIL)
  const $isLoading = status.map(state => state === STATUSES.LOADING)
  const $isInitial = status.map(state => state === STATUSES.INITIAL)

  return { result, error, status, $isDone, $isFailed, $isLoading, $isInitial }
}
