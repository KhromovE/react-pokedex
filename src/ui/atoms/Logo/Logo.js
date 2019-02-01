import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../../../assets/logo.svg'

const Img = styled.img`
  height: ${({ height }) => height}px;
  transform: ${({ flip }) => flip && 'scale(-1, -1)'};
`

export const LogoView = ({ height, flip }) => <Img src={logo} height={height} alt="pokemon" flip={flip} />

export const Logo = memo(LogoView)

LogoView.propTypes = {
  height: PropTypes.string,
  flip: PropTypes.bool,
}

LogoView.defaultProps = {
  height: '60',
  flip: false,
}
