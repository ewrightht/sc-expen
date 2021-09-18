import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styled/Container";
import MenubarItem from "./MenubarItem";

const MenubarContainer = styled.div`
  width: 70px;
  height: 100%;
  background: ${props => props.theme.palette.primary};
  display: flex;
  flex-direction: column;
`;

export default function Menubar() {

  function renderUI() {
    return (
      <MenubarContainer>
        <FlexContainer fluid flex>
          <MenubarItem>
            <i className="fas fa-home fa-lg"></i>
          </MenubarItem>
        </FlexContainer>
        <MenubarItem>
          <i className="fas fa-cog fa-lg"></i>
        </MenubarItem>
        <MenubarItem>
          <i className="fas fa-sign-out-alt fa-lg"></i>
        </MenubarItem>
      </MenubarContainer>
    );
  }

  return renderUI();
}