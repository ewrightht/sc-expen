import React from "react";
import styled from "styled-components";

import { Typography } from "../../../../styled/Typography";
import { Space } from "../../../../styled/Space";
import { List, ListItem } from "../../../../styled/List";

const SidePanelContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding: 20px 15px;
  background: ${props => props.theme.palette.light};
`;

export default function SidePanel() {

  function renderList() {
    return (
      <List>
        <ListItem active>
          <i className="far fa-list-alt"></i>
          <Typography>
            Resumen
          </Typography>
        </ListItem>
        <ListItem>
          <i className="fas fa-list"></i>
          <Typography>
            Gastos
          </Typography>
        </ListItem>
        <ListItem>
          <i className="fas fa-history"></i>
          <Typography>
            Historial
          </Typography>
        </ListItem>
      </List>
    );
  }

  function renderUI() {
    return (
      <SidePanelContainer>
        <Typography weight="700" size="1.2">
          Xpen App
        </Typography>
        <Space mt="30" />
        {renderList()}
      </SidePanelContainer>
    );
  }

  return renderUI();
}