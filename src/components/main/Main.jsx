import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "../../constants/routes";

import Layout from "./layout/Layout";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {

  function renderUI() {
    return (
      <Layout>
        <Switch>
          <Redirect
            exact
            from={routes.main}
            to={routes.dashboard}
          /> 
          <Route
            path={routes.dashboard}
            component={Dashboard}
          />
        </Switch>
      </Layout>
    );
  }

  return renderUI();
}