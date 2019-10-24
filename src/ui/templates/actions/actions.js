import styled from 'styled-components'

export const ActionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    justify-content: center;
  }
`
