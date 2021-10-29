import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "./routeComponents/PrivateRoute";
import routes from "../constants/routes";

import { Loader } from "../styled/Loader";

const Login = lazy(() => import("../components/auth/login/Login"));
import Main from "../components/main/Main";
import { useStores } from "../stores/useStores";

export default function Routes() {
  const { checkAuthentication, isAuthenticated, isChecking } = useStores(state => ({
    checkAuthentication: state.checkAuthentication,
    isAuthenticated: state.isAuthenticated,
    isChecking: state.isChecking
  }));

  useEffect(() => {
    (async function () {
      await checkAuthentication();
    })()
  }, []);

  if (isChecking) {
    return <Loader />;
  }

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
            <PrivateRoute
              path={routes.main}
              component={Main}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }

  return renderUI();
}