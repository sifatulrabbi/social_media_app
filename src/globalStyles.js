import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #e9e9e9;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
