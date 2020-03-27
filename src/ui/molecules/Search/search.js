import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 16px;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
`

export const Search = ({ placeholder, handleSearchChange }) => {
  const [value, setValue] = useState('')

  const handleInputChange = useCallback(
    e => {
      const { value: inputValue } = e.target

      setValue(inputValue)
      handleSearchChange(inputValue)
    },
    [handleSearchChange],
  )

  return <Input value={value} placeholder={placeholder} onChange={handleInputChange} />
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
}
