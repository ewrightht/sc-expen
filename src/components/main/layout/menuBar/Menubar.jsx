import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styled/Container";
import MenubarItem from "./MenubarItem";

const MenubarContainer = styled.div`
  width: 65px;
  height: 100%;
  background: ${props => props.theme.palette.primary};
  display: flex;
  flex-direction: column;
`;

export default function Menubar() {

  function renderUI() {
    return (
      <MenubarContainer>
        <FlexContainer fluid flex color="primary">
          <MenubarItem>
            <i className="fas fa-home"></i>
          </MenubarItem>
        </FlexContainer>
        <MenubarItem>
          <i className="fas fa-cog"></i>
        </MenubarItem>
        <MenubarItem>
          <i className="fas fa-sign-out-alt"></i>
        </MenubarItem>
      </MenubarContainer>
    );
  }

  return renderUI();
}