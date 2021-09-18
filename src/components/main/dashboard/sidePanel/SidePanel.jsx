import React from "react";
import styled from "styled-components";

const SidePanelContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: ${props => props.theme.palette.light};
`;

export default function SidePanel() {

  function renderUI() {
    return (
      <SidePanelContainer>
      </SidePanelContainer>
    );
  }

  return renderUI();
}