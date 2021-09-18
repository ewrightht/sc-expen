import React from "react";
import { FlexContainer } from "../../../styled/Container";
import SidePanel from "./sidePanel/SidePanel";

export default function Dashboard() {

  function renderUI() {
    return (
      <>
        <SidePanel />
        <FlexContainer fluid flex>

        </FlexContainer>
      </>
    );
  }

  return renderUI();
}