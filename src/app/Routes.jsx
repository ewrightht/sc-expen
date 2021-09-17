import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "../components/auth/login/Login";
import Main from "../components/main/Main";

export default function Routes() {

  function renderUI() {
    return (
      <BrowserRouter basename="/app">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }

  return renderUI();
}