import { decorate, observable, computed } from 'mobx'

import { getPokemonList, getPokemon } from './api'
import { LIMITS } from './constants'

export class PokedexStore {
  list = []
  offset = LIMITS[1]
  limit = LIMITS[1]
  count = 0
  loading = false

  getPokemonList = async () => {
    this.loading = true

    const { results, count } = await getPokemonList(this.limit, this.offset)

    this.list = results
    this.count = count

    const promises = results.reduce((acc, data) => [...acc, getPokemon(data.name)], [])
    const fullDataList = await Promise.all(promises)

    this.list = fullDataList

    this.loading = false
  }

  handlePageChange = async ({ selected }) => {
    this.offset = selected * this.limit

    await this.getPokemonList()
  }

  get pageNumber() {
    return Math.floor(this.count / this.offset)
  }
}

decorate(PokedexStore, {
  list: observable,
  offset: observable,
  limit: observable,
  count: observable,
  loading: observable,
  pageNumber: computed,
})
