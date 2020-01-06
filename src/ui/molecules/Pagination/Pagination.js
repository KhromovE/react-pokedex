import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const Wrapper = styled.div`
  & .pagination {
    list-style: none;
    padding-left: 0;
    display: flex;

    & .item,
    & .next,
    & .previous {
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      margin: 0 3px;
      height: 38px;
      border-radius: 38px;
      line-height: 38px;
      padding: 0;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
      min-width: 38px;

      & > a {
        display: block;
      }
    }

    & .page,
    & .next,
    & .previous {
      &:hover {
        background-color: ${({ theme }) => theme.mediumGray};
      }
    }

    & .page {
      &.active {
        background-color: ${({ theme }) => theme.red};
        color: ${({ theme }) => theme.white};
      }
    }
  }
`

const enhance = memo

export const PaginationView = ({ count, handlePageChange }) => (
  <Wrapper>
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel="..."
      breakClassName="break-me item"
      pageCount={count}
      onPageChange={({ selected }) => handlePageChange(selected)}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName="pagination"
      pageClassName="item page"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  </Wrapper>
)

PaginationView.propTypes = {
  count: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
}

export const Pagination = enhance(PaginationView)
