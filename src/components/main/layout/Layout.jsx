import React from "react";
import { FlexContainer } from "../../../styled/Container";
import Menubar from "./menuBar/Menubar";

export default function Layout({ children }) {
  
  function renderUI() {
    return (
      <FlexContainer fluid fullHeight>
        <Menubar />
        {children}
      </FlexContainer>
    );
  }

  return renderUI();
}