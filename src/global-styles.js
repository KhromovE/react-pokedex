import { createGlobalStyle } from 'styled-components'
import { MEDIUM_GRAY } from './colors'

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Gotham Book', Arial, sans-serif;
    margin: 0;
    background-color: ${MEDIUM_GRAY};
	}
`
