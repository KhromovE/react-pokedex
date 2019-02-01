import { createGlobalStyle } from 'styled-components'
import { LIGHT_GRAY } from './colors'

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Gotham Book', Arial, sans-serif;
    margin: 0;
    background-color: ${LIGHT_GRAY};
	}
`
