import { get } from '../shared'

export const getPokemonList = (limit, offset) => get('pokemon', { limit, offset })
export const getPokemon = name => get(`pokemon/${name}`)
