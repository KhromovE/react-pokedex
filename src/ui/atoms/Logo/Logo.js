import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../../assets/logo.svg'

const Img = styled.img`
  height: ${({ height }) => height}px;
`

export const LogoView = ({ height }) => <Img src={logo} height={height} alt="pokemon" />

export const Logo = memo(LogoView)

LogoView.propTypes = {
  height: PropTypes.string,
}

LogoView.defaultProps = {
  height: '60',
}
