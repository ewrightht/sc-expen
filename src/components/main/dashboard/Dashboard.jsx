import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import routes from "../../../constants/routes";

import { FlexContainer } from "../../../styled/Container";
import SidePanel from "./sidePanel/SidePanel";
import Expends from "./expends/Expends";
import Summary from "./summary/Summary";
import AddBalanceModal from "./addBalanceModal/AddBalanceModal";

export default function Dashboard() {
  const [openNewBalanceModal, setOpenNewBalanceModal] = useState(false);

  function handleOpenAddBalanceModal() {
    setOpenNewBalanceModal(true);
  }

  function renderUI() {
    return (
      <>
        <SidePanel />
        <FlexContainer fluid flex style={{ overflowY: "auto" }}>
          <Switch>
            <Redirect
              exact
              from={routes.dashboard}
              to={routes.dashboardSummary}
            />
            <Route exact path={routes.dashboardSummary} >
              <Summary handleOpenAddBalanceModal={handleOpenAddBalanceModal} />
            </Route>
            <Route exact path={routes.dashboardExpends} >
              <Expends handleOpenAddBalanceModal={handleOpenAddBalanceModal} />
            </Route>
          </Switch>
        </FlexContainer>

        <AddBalanceModal
          showModal={openNewBalanceModal}
          setShowModal={setOpenNewBalanceModal}
        />
      </>
    );
  }

  return renderUI();
}