import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../../styled/Container";
import { Space } from "../../../../../styled/Space";
import { Typography } from "../../../../../styled/Typography";

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  margin-top: 15px;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props =>
    props.theme.palette[props.color] || props.theme.palette.primary};
  > * {
    color: ${props => props.theme.palette.white};
  }
`;

export default function SummaryCategories() {

  function renderUI() {
    return (
      <FlexContainer flex alignItems="center" wrap>
        <CategoryItem color="danger">
          <Typography size="1.5" weight="600">
            $370000
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Vestimenta
          </Typography>
        </CategoryItem>
        <CategoryItem color="warning">
          <Typography size="1.5" weight="600">
            62
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Hogar
          </Typography>
        </CategoryItem>
        <CategoryItem color="success">
          <Typography size="1.5" weight="600">
            $865700
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Salud
          </Typography>
        </CategoryItem>
        <CategoryItem color="danger">
          <Typography size="1.5" weight="600">
            $370000
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Vestimenta
          </Typography>
        </CategoryItem>
        <CategoryItem color="warning">
          <Typography size="1.5" weight="600">
            62
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Hogar
          </Typography>
        </CategoryItem>
        <CategoryItem color="success">
          <Typography size="1.5" weight="600">
            $865700
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Salud
          </Typography>
        </CategoryItem>
      </FlexContainer>
    );
  }

  return renderUI();
}