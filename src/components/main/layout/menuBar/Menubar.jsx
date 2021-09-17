import React from "react";
import styled from "styled-components";

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

      </MenubarContainer>
    );
  }

  return renderUI();
}