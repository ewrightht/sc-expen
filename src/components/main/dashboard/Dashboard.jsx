import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import routes from "../../../constants/routes";

import { FlexContainer } from "../../../styled/Container";
import SidePanel from "./sidePanel/SidePanel";
import Expends from "./expends/Expends";
import Summary from "./summary/Summary";

export default function Dashboard() {

  function renderUI() {
    return (
      <>
        <SidePanel />
        <FlexContainer fluid flex>
          <Switch>
            <Redirect
              exact
              from={routes.dashboard}
              to={routes.dashboardSummary}
            />
            <Route 
              exact 
              path={routes.dashboardSummary}
              component={Summary} 
            />
            <Route 
              exact 
              path={routes.dashboardExpends}
              component={Expends}
            />
          </Switch>
        </FlexContainer>
      </>
    );
  }

  return renderUI();
}