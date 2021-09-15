import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";

export default function Routes() {

  function renderUI() {
    return (
      <BrowserRouter basename="/app">
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }

  return renderUI();
}