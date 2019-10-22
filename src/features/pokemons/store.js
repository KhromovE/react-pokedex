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

export class PokemonsStore {
  list = Array(LIMITS[1])
    .fill(1)
    .map((_, index) => ({ name: `name-${index}` }))

  offset = 0

  limit = LIMITS[1]

  count = 0

  loading = false

  name = ''

  getPokemonList = async () => {
    this.loading = true

    if (this.name.length) {
      const [response] = await Promise.all([getPokemon(this.name), fakeDelay()])

      if (response) {
        this.list = [response]
        this.count = 1
      } else {
        this.list = []
        this.count = 0
      }
    } else {
      const [response] = await Promise.all([getPokemonList(this.limit, this.offset), fakeDelay()])
      const { results, count } = response

      this.list = results
      this.count = count

      const promises = results.reduce((acc, data) => [...acc, getPokemon(data.name)], [])
      const fullDataList = await Promise.all(promises)

      this.list = fullDataList
    }

    this.loading = false
  }

  handlePageChange = async ({ selected }) => {
    this.offset = selected * this.limit

    await this.getPokemonList()
  }

  handleLimitChange = async limit => {
    this.limit = limit
    this.offset = 0

    await this.getPokemonList()
  }

  handleSearchChange = async name => {
    this.name = name

    await this.getPokemonList()
  }

  get pageNumber() {
    return Math.ceil(this.count / this.limit)
  }
}

decorate(PokemonsStore, {
  list: observable,
  offset: observable,
  limit: observable,
  count: observable,
  loading: observable,
  pageNumber: computed,
})
