export const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value,
  )

export const arrayToHashMap = (arr, key) => arr.reduce((acc, value) => ({ ...acc, [value[key]]: value }), {})

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

export const fakeDelay = (delay = 600) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}
