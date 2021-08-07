import { createGlobalStyle } from "styled-components";
import { theme } from "./Contexts/ThemeContext";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    color: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  body {
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
    max-width: 100vw;
    background-color: ${theme.palette.background.default};
  }

  button, input, textarea {
    background-color: transparent;
    border: none;
    outline: none;
    overflow-x: hidden;
    background-color: #e9e9e9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
