import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./layout/Layout";
import Dashboard from "./dashboard/Dashboard";

export default function Main() {

  function renderUI() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect exact from="/main" to="/dashboard" />
        </Switch>
      </Layout>
    );
  }

  return renderUI();
}