import { get } from '../shared'

export const getPokemonList = (limit, offset) => get('pokemon', { limit, offset })
export const getPokemon = async name => {
  let response
  try {
    response = await get(`pokemon/${name}`)
  } catch {
    return null
  }

  return response
}
