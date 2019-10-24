import { GET } from './constants'
import { keysToCamelCase } from '../../lib/cases'

const baseUrl = 'https://pokeapi.co/api/v2/'

const callApi = async (type = GET, path, data = {}) => {
  const url = new URL(baseUrl + path)

  if (type === GET) {
    url.search = new URLSearchParams(data)
  }

  const response = await fetch(url)
  const result = await response.json()

  return keysToCamelCase(result)
}

export const get = (path, params) => callApi(GET, path, params)
