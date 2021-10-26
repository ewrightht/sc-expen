import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "../../constants/routes";

export default function PrivateRoute(props) {
  const user = null;

  if (!user) return <Redirect to={routes.login} />
  
  return <Route {...props} />
}