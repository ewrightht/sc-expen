import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "../constants/routes";

import Login from "../components/auth/login/Login";
import Main from "../components/main/Main";

export default function Routes() {

  function renderUI() {
    return (
      <BrowserRouter basename="/app">
        <Switch>
          <Redirect
            exact
            from={routes.root}
            to={routes.login}
          />
          <Route exact path={routes.login} component={Login} />
          <Route path={routes.main} component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }

  return renderUI();
}