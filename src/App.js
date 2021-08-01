import React from "react";
import { GlobalStyles } from "./globalStyles";
import { HomePage, LoginPage, SignUpPage, ForgotPassPage, DashboardPage } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components";
import {
  AuthProvider,
  CommentsProvider,
  CustomThemeProvider,
  LoadingProvider,
  PostsProvider,
  SetPostProvider,
} from "./Contexts";

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        <GlobalStyles />
        <LoadingProvider>
          <AuthProvider>
            <PostsProvider>
              <Switch>
                <SetPostProvider>
                  <CommentsProvider>
                    <PrivateRoute exact path="/" component={HomePage} />
                  </CommentsProvider>
                </SetPostProvider>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/sign-up" component={SignUpPage} />
                <Route exact path="/reset-password" component={ForgotPassPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
              </Switch>
            </PostsProvider>
          </AuthProvider>
        </LoadingProvider>
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
