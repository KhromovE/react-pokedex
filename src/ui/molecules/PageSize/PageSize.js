import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { DARK_GRAY, MEDIUM_GRAY, RED } from '../../../colors'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0;
  color: ${DARK_GRAY};
`

const Label = styled.span`
  margin-right: 12px;
`

const Item = styled.a`
  display: block;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 3px;
  height: 38px;
  width: 38px;
  border-radius: 38px;
  line-height: 38px;
  padding: 0;
  color: ${({ selected }) => (selected ? 'white' : DARK_GRAY)};
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ selected }) => (selected ? RED : 'none')}

  &:hover {
    background-color: ${({ selected }) => (selected ? RED : MEDIUM_GRAY)};
  }
`

export const PageSize = ({ items, handleLimitChange, limit }) => (
  <Wrapper>
    <Label>Page size:</Label>
    {items.map(item => (
      <Item
        href="#"
        key={item}
        selected={limit === item}
        onClick={e => {
          e.preventDefault()

          if (limit !== item) {
            handleLimitChange(item)
          }
        }}
      >
        {item}
      </Item>
    ))}
  </Wrapper>
)

PageSize.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number),
  handleLimitChange: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
}

PageSize.defaultProps = {
  items: [],
}
