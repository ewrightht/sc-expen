import React from "react";
import styled from "styled-components";

import { Typography } from "../../../../styled/Typography";

const SidePanelContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding: 30px;
  background: ${props => props.theme.palette.light};
`;

export default function SidePanel() {

  function renderUI() {
    return (
      <SidePanelContainer>
        <Typography weight="700" size="1.2">
          Xpen App
        </Typography>
      </SidePanelContainer>
    );
  }

  return renderUI();
}