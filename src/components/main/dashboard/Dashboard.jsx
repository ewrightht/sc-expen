import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import routes from "../../../constants/routes";

import { FlexContainer } from "../../../styled/Container";
import SidePanel from "./sidePanel/SidePanel";
import Expenses from "./expenses/Expenses";
import Summary from "./summary/Summary";
import AddBalanceModal from "./addBalanceModal/AddBalanceModal";
import AddExpenseModal from "./addExpenseModal/AddExpenseModal";

export default function Dashboard() {
  const [openAddBalanceModal, setOpenAddBalanceModal] = useState(false);
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  function handleOpenAddBalanceModal() {
    setOpenAddBalanceModal(true);
  }

  function handleOpenAddExpenseModal() {
    setOpenAddExpenseModal(true);
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
              <Summary
                handleOpenAddBalanceModal={handleOpenAddBalanceModal}
                handleOpenAddExpenseModal={handleOpenAddExpenseModal}
              />
            </Route>
            <Route exact path={routes.dashboardExpends} >
              <Expenses handleOpenAddExpenseModal={handleOpenAddExpenseModal} />
            </Route>
          </Switch>
        </FlexContainer>

        <AddBalanceModal
          showModal={openAddBalanceModal}
          setShowModal={setOpenAddBalanceModal}
        />
        <AddExpenseModal
          showModal={openAddExpenseModal}
          setShowModal={setOpenAddExpenseModal}
        />
      </>
    );
  }

  return renderUI();
}