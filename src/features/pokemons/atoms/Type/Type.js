import styled from 'styled-components'

export const TYPE_COLORS = {
  normal: '#a7a971',
  fighting: '#d1181b',
  flying: '#ad8cf7',
  poison: '#ad33a5',
  ground: '#e6c057',
  rock: '#bda011',
  bug: '#a3ba00',
  ghost: '#75559c',
  steel: '#b8b8d2',
  fire: '#ff7900',
  water: '#5f8ff7',
  grass: '#58cc35',
  electric: '#ffd000',
  psychic: '#ff4587',
  ice: '#84dad9',
  dragon: '#7b25ff',
  dark: '#735745',
  fairy: '#ffa4ff',
}

export const Type = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ children }) => TYPE_COLORS[children]};
  color: white;
  font-size: 14px;
  border-radius: 15px;
  padding: 0 12px;
  margin-left: 5px;
  height: 21px;
`
