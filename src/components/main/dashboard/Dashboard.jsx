import React, { useState, lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import routes from "../../../constants/routes";

import { FlexContainer } from "../../../styled/Container";
import SidePanel from "./sidePanel/SidePanel";
const Expenses = lazy(() => import("./expenses/Expenses"));
const Summary = lazy(() => import("./summary/Summary"));

import AddBalanceModal from "./addBalanceModal/AddBalanceModal";
import AddExpenseModal from "./addExpenseModal/AddExpenseModal";
import { Loader } from "../../../styled/Loader";

export default function Dashboard() {
  const [openAddBalanceModal, setOpenAddBalanceModal] = useState({ visible: false });
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState({ visible: false });

  function handleOpenAddBalanceModal() {
    setOpenAddBalanceModal({ visible: true });
  }

  function handleOpenAddExpenseModal() {
    setOpenAddExpenseModal({ visible: true });
  }

  function renderUI() {
    return (
      <>
        <SidePanel />
        <FlexContainer fluid flex style={{ overflowY: "auto" }}>
          <Suspense fallback={<Loader />}>
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
          </Suspense>
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