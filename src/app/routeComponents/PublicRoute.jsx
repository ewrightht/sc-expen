import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "../../constants/routes";

export default function PublicRoute(props) {
  const { isAuthenticated, ...rest } = props;

  if (isAuthenticated) return <Redirect to={routes.main} />

  return <Route {...rest} />
}