import { get } from '../shared'

export const getPokemonList = (limit, offset) => get('pokemon', { limit, offset })
export const getPokemon = async name => {
  let data
  try {
    const { sprites, types, stats } = await get(`pokemon/${name}`)

    data = {
      image: sprites.front_default,
      name,
      types,
      stats,
    }
  } catch {
    return null
  }

  return data
}
