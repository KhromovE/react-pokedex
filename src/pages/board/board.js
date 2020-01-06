import React from 'react'
import { useStore } from 'effector-react'

import { Search, Header, Pagination, PageSize } from '../../ui/molecules'
import { Main, ActionsWrapper, SearchContainer } from '../../ui/templates'
import { PokemonList, LIMITS } from '../../features/pokemons'

import {
  pageIsLoaded,
  paginationClicked,
  pageSizeChanged,
  searchFieldChanged,
  $list,
  $listIsLoading,
  $pageNumber,
  $pageLimit,
  $searchValue,
} from './model'

export const Board = () => {
  const list = useStore($list)
  const isLoading = useStore($listIsLoading)
  const pageNumber = useStore($pageNumber)
  const pageLimit = useStore($pageLimit)
  const searchValue = useStore($searchValue)

  return (
    <Main header={<Header />}>
      <SearchContainer>
        <Search placeholder="Search" handleSearchChange={searchFieldChanged} value={searchValue} />
      </SearchContainer>
      <PokemonList getPokemonList={pageIsLoaded} list={list} isLoading={isLoading} />
      <ActionsWrapper>
        <Pagination count={pageNumber} handlePageChange={paginationClicked} />
        <PageSize items={LIMITS} handleLimitChange={pageSizeChanged} limit={pageLimit} />
      </ActionsWrapper>
    </Main>
  )
}
