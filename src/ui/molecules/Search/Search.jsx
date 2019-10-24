import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

import { LIGHT_GRAY } from '../../../colors'

const Input = styled.input`
  font-size: 16px;
  padding: 0.5em;
  outline: none;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
`

export const Search = ({ placeholder, handleSearchChange }) => {
  const [value, setValue] = useState('')

  const debouncedSearchChange = useCallback(debounce(handleSearchChange, 400), [handleSearchChange])

  const handleInputChange = useCallback(
    e => {
      const { value: inputValue } = e.target

      setValue(inputValue)
      debouncedSearchChange(inputValue)
    },
    [debouncedSearchChange],
  )

  return <Input value={value} placeholder={placeholder} onChange={handleInputChange} />
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
}
