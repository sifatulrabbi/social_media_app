import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #e9e9e9;
  }
`;

export default GlobalStyles;
