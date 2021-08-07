import { createContext } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { blue, yellow, lightBlue } from "@material-ui/core/colors";

const ThemeContext = createContext();

const myTheme = createTheme({
  palette: {
    type: "dark",
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
    background: {
      default: "#1a1a1a",
      paper: "#2a2a2a",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export const theme = responsiveFontSizes(myTheme);

export function CustomThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
