import { decorate, observable, computed } from 'mobx'

import { getPokemonList, getPokemon } from './api'
import { LIMITS } from './constants'

const fakeDelay = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 600)
  })
}

export class PokedexStore {
  list = Array(LIMITS[1])
    .fill(1)
    .map((_, index) => ({ name: `name-${index}` }))
  offset = 0
  limit = LIMITS[1]
  count = 0
  loading = false

  getPokemonList = async () => {
    this.loading = true

    const [response] = await Promise.all([getPokemonList(this.limit, this.offset), fakeDelay()])
    const { results, count } = response

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
    return Math.floor(this.count / this.limit)
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
