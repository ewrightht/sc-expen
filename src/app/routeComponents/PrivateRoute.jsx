import React from "react";
import { Route, Redirect } from "react-router-dom";

import routes from "../../constants/routes";

export default function PrivateRoute(props) {
  const { isAuthenticated, component: Component, ...rest } = props;

  return <Route {...rest} component={(props) => (
    isAuthenticated ? <Component {...props} /> : <Redirect to={routes.login} />
  )} />
}