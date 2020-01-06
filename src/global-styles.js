import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Gotham Book', Arial, sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.ligtherGray};
		color: ${({ theme }) => theme.darkGray};
	}
`
