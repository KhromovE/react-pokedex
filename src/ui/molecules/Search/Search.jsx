import React, { PureComponent } from 'react'
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
`

export class Search extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  handleInputChange = e => {
    const value = e.target.value

    this.setState({ value }, () => {
      this.handleSearchChange(value)
    })
  }

  handleSearchChange = debounce(this.props.handleSearchChange, 400)

  render() {
    const { value } = this.state
    const { placeholder } = this.props

    return <Input value={value} placeholder={placeholder} onChange={this.handleInputChange} />
  }
}
