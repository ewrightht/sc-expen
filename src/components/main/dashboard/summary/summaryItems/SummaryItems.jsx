import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../../styled/Container";
import { Space } from "../../../../../styled/Space";
import { Typography } from "../../../../../styled/Typography";

const SummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.light};
`;

export default function SummaryItems() {

  function renderUI() {
    return (
      <FlexContainer flex alignItems="center">
        <SummaryItem>
          <Typography size="1.5" weight="600">
            $370000
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Balance actual
          </Typography>
        </SummaryItem>
        <Space ml="15" />
        <SummaryItem>
          <Typography size="1.5" weight="600">
            62
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Total de gastos
          </Typography>
        </SummaryItem>
        <Space ml="15" />
        <SummaryItem>
          <Typography size="1.5" weight="600">
            $865700
          </Typography>
          <Space mt="2" />
          <Typography weight="400">
            Cantidad de gastos
          </Typography>
        </SummaryItem>
      </FlexContainer>
    );
  }

  return renderUI();
}