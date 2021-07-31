import React from "react";
import { GlobalStyles } from "./globalStyles";
import { HomePage, LoginPage, SignUpPage, ForgotPassPage, DashboardPage } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components";
import {
  AuthProvider,
  CustomThemeProvider,
  PostsProvider,
  SetPostProvider,
} from "./Contexts";

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        <GlobalStyles />
        <AuthProvider>
          <PostsProvider>
            <Switch>
              <SetPostProvider>
                <PrivateRoute exact path="/" component={HomePage} />
              </SetPostProvider>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/reset-password" component={ForgotPassPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
            </Switch>
          </PostsProvider>
        </AuthProvider>
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
