import React from "react";
import { Home } from "./Pages";
import { UserContextProvider } from "./Contexts/UserContext";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { blue, yellow } from "@material-ui/core/colors";
import GlobalStyles from "./globalStyles";

const theme = createTheme({
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
  },
});

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
