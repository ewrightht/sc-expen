import React from "react";
import styled from "styled-components";
import routes from "../../../../constants/routes";
import { useStores } from "../../../../stores/useStores";

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
  const { logoutUser } = useStores((state) => ({
    logoutUser: state.logoutUser
  }));

  function renderUI() {
    return (
      <MenubarContainer>
        <FlexContainer fluid flex color="primary">
          <MenubarItem to={routes.dashboard} activeClassName="active">
            <i className="fas fa-home"></i>
          </MenubarItem>
        </FlexContainer>
        <MenubarItem to="/main/settings" activeClassName="active">
          <i className="fas fa-cog"></i>
        </MenubarItem>
        <MenubarItem to={routes.login} activeClassName="active" onClick={logoutUser}>
          <i className="fas fa-sign-out-alt"></i>
        </MenubarItem>
      </MenubarContainer >
    );
  }

  return renderUI();
}