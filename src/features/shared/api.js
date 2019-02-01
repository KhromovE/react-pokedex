import { GET } from './constants'

const baseUrl = 'https://pokeapi.co/api/v2/'

const callApi = async (type = GET, path, data = {}) => {
  let url = new URL(baseUrl + path)

  if (type === GET) {
    url.search = new URLSearchParams(data)
  }

  const response = await fetch(url)
  return response.json()
}

export const get = (path, params) => callApi(GET, path, params)
