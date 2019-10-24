export const isObject = value => value === Object(value) && !Array.isArray(value) && typeof value !== 'function'

export const toCamel = string =>
  string.replace(/([-_][a-z])/gi, $1 =>
    $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  )

export const keysToCamelCase = args => {
  if (isObject(args)) {
    return Object.keys(args).reduce((acc, keys) => {
      acc[toCamel(keys)] = keysToCamelCase(args[keys])

      return acc
    }, {})
  }

  if (Array.isArray(args)) {
    return args.map(i => keysToCamelCase(i))
  }

  return args
}
