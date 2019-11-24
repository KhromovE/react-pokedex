import React from 'react'
import { useStore } from 'effector-react'

import { Search, Header, Pagination, PageSize } from '../../ui/molecules'
import { Main, ActionsWrapper, SearchContainer } from '../../ui/templates'
import { PokemonList, LIMITS } from '../../features/pokemons'

import {
  $list,
  $listIsLoading,
  $pageNumber,
  $pageLimit,
  pageIsLoaded,
  paginationWasClicked,
  pageSizeWasChanged,
} from './model'

export const Board = () => {
  const list = useStore($list)
  const isLoading = useStore($listIsLoading)
  const pageNumber = useStore($pageNumber)
  const pageLimit = useStore($pageLimit)

  return (
    <Main header={<Header />}>
      <SearchContainer>
        <Search
          placeholder="Search"
          handleSearchChange={() => {}}
          // value={pokemonsStore.name}
        />
      </SearchContainer>
      <PokemonList getPokemonList={pageIsLoaded} list={list} isLoading={isLoading} />
      <ActionsWrapper>
        <Pagination count={pageNumber} handlePageChange={paginationWasClicked} />
        <PageSize items={LIMITS} handleLimitChange={pageSizeWasChanged} limit={pageLimit} />
      </ActionsWrapper>
    </Main>
  )
}
