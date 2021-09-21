import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {

  function renderUI() {
    return (
      <Layout>
        <Switch>
          <Redirect
            exact
            from="/main"
            to="/main/dashboard"
          />
          <Route
            exact
            path="/main/dashboard"
            component={Dashboard}
          />
        </Switch>
      </Layout>
    );
  }

  return renderUI();
}