import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PokemonCard } from '../../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export class PokemonList extends PureComponent {
  static propTypes = {
    getPokemonList: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {
    this.props.getPokemonList()
  }

  render() {
    const { list } = this.props

    return (
      <Wrapper>
        {list.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </Wrapper>
    )
  }
}
