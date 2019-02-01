export const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)), value => value)

export const arrayToHashMap = (arr, key) => arr.reduce((acc, value, index) => ({ ...acc, [value[key]]: value }), {})

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
