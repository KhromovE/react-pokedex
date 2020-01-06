import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
  margin-bottom: 0.5rem;
`

const Value = styled.span`
  font-size: 15px;
  margin-bottom: 0.8rem;
`

export const StatView = ({ children, name }) => (
  <Wrapper>
    <Label>{name}</Label>
    <Value>{children}</Value>
  </Wrapper>
)

StatView.propTypes = {
  children: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export const Stat = memo(StatView)
