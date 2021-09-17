import React from "react";
import { FlexContainer } from "../../../styled/Container";

export default function Layout({ children }) {
  
  function renderUI() {
    return (
      <FlexContainer fluid fullHeight>
        {children}
      </FlexContainer>
    );
  }

  return renderUI();
}