import { createGlobalStyle } from "styled-components";
import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { blue, lightBlue, yellow } from "@material-ui/core/colors";

const lightTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[400],
      dark: blue[600],
      contrastText: "#fff",
    },

    secondary: {
      light: yellow[400],
      main: yellow[600],
      dark: yellow[700],
      contrastText: "#000",
    },

    info: {
      light: lightBlue[200],
      main: lightBlue[400],
      dark: lightBlue[600],
    },
  },

  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export const theme = responsiveFontSizes(lightTheme);

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
    background-color: #e9e9e9;
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

// margin: theme.spacing(1, 'auto'), // '8px auto'
