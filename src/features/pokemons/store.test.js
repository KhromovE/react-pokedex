import { PokedexStore } from './store'
import { LIMITS } from './constants'

describe('PokedexStore', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should create an init store', () => {
    const store = new PokedexStore()

    expect(store.offset).toBe(0)
    expect(store.limit).toBe(LIMITS[1])
    expect(store.count).toBe(0)
    expect(store.loading).toBe(false)
    expect(store.name).toBe('')
  })

  it('should update list', async () => {
    const store = new PokedexStore()

    fetch.mockResponses([
      JSON.stringify({ count: 1, results: [{ name: 'foobar' }] }),
      JSON.stringify({ name: 'foobar' }),
    ])

    await store.getPokemonList()

    expect(store.count).toBe(1)
    expect(store.list.length).toBe(1)
  })

  it('should update name', async () => {
    const store = new PokedexStore()

    await store.handleSearchChange('foobar')

    expect(store.name).toBe('foobar')
  })

  it('should change limit', async () => {
    const store = new PokedexStore()

    fetch.mockResponses([
      JSON.stringify({ count: 1, results: [{ name: 'foobar' }] }),
      JSON.stringify({ name: 'foobar' }),
    ])

    await store.handleLimitChange(LIMITS[0])

    expect(store.limit).toBe(LIMITS[0])
  })

  it('should change page', async () => {
    const store = new PokedexStore()

    fetch.mockResponses([
      JSON.stringify({ count: 1, results: [{ name: 'foobar' }] }),
      JSON.stringify({ name: 'foobar' }),
    ])

    await store.handlePageChange({ selected: 2 })

    expect(store.offset).toBe(LIMITS[1] * 2)
  })
})
