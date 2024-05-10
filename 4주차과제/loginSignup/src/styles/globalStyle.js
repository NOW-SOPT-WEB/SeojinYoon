import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.lightWhite};
    font-family: 'SUITE-Regular';
    font-size: 62.5%;
}

button {
    border: none;
    
    font-family: 'SUITE-Regular';
}
`;

export default GlobalStyle;
