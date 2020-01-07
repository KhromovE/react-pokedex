import { get } from '../shared'

export const getPokemonList = ({ limit, offset }) => get('pokemon', { limit, offset })
export const getPokemon = async query => {
  let data

  try {
    const { sprites, types, stats, name } = await get(`pokemon/${query}`)

    data = {
      image: sprites.frontDefault,
      name,
      types,
      stats,
    }
  } catch {
    return null
  }

  return data
}
