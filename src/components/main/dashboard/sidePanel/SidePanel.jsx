import React from "react";
import styled from "styled-components";

import { Typography } from "../../../../styled/Typography";
import { Space } from "../../../../styled/Space";
import { List, ListItem } from "../../../../styled/List";
import routes from "../../../../constants/routes";

import { useStores } from "../../../../stores/useStores";

const SidePanelContainer = styled.div`
  width: 280px;
  height: 100vh;
  padding: 20px 15px;
  background: ${props => props.theme.palette.light};
`;

export default function SidePanel() {
  const { user } = useStores((state) => ({
    user: state.user,
  }));

  const listItems = [
    { title: "Resumen", route: routes.dashboardSummary, icon: "stream" },
    { title: "Gastos", route: routes.dashboardExpends, icon: "list" },
    { title: "Adiciones", route: routes.dashboardAdditions, icon: "search-dollar" },
    { title: "Categorías", route: routes.dashboardCategories, icon: "th" },
  ];

  function renderListItem() {
    return listItems.map((item) => (
      <ListItem key={item.title} to={item.route} activeClassName="active">
        <i className={`fas fa-${item.icon}`}></i>
        <Typography>{item.title}</Typography>
      </ListItem>
    ))
  }

  function renderList() {
    return (
      <List>
        {renderListItem()}
      </List>
    );
  }

  function renderUI() {
    return (
      <SidePanelContainer>
        <Typography weight="700" size="1.2">
          Xpen App - {user.username}
        </Typography>
        <Space mt="30" />
        {renderList()}
      </SidePanelContainer>
    );
  }

  return renderUI();
}