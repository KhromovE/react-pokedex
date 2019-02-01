import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

import { RED, GRAY } from '../../../colors'

const Wrapper = styled.div`
  & .pagination {
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: center;

    & .next,
    & .previous {
      width: 80px;
    }

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
      color: #000;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;

      & > a {
        display: block;

        &:focus {
          outline: 0;
        }
      }
    }

    & .page,
    & .next,
    & .previous {
      &:hover {
        background-color: ${GRAY};
      }
    }

    & .page {
      min-width: 38px;

      &.active {
        background-color: ${RED};
        color: #fff;
      }
    }
  }
`

const enhance = memo

export const PaginationView = ({ count, handlePageChange }) => (
  <Wrapper>
    <ReactPaginate
      previousLabel={'prev'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me item'}
      pageCount={count}
      onPageChange={handlePageChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName={'pagination'}
      pageClassName={'item page'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  </Wrapper>
)

PaginationView.propTypes = {
  count: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
}

export const Pagination = enhance(PaginationView)