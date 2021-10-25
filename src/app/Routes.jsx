import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "../constants/routes";

import { Loader } from "../styled/Loader";

const Login = lazy(() => import("../components/auth/login/Login"));
import Main from "../components/main/Main";

export default function Routes() {

  function renderUI() {
    return (
      <BrowserRouter basename="/app">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Redirect
              exact
              from={routes.root}
              to={routes.login}
            />
            <Route exact path={routes.login} component={Login} />
            <Route path={routes.main} component={Main} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }

  return renderUI();
}