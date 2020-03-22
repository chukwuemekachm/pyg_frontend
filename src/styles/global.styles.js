import { createGlobalStyle } from 'styled-components';

import { WHITE } from 'Styles/colors.styles';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${WHITE};
    font-family: 'Fira Sans', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;
