import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { GlobalStyles, theme } from "./globalStyles";
import { HomePage, LoginPage, SignUpPage, ForgotPassPage, DashboardPage } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { PrivateRoute } from "./Components";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path="/reset-password" component={ForgotPassPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
