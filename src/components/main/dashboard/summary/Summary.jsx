import React from "react";
import styled from "styled-components";

import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";

const SummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
`;

export default function Summary() {

  function renderUI() {
    return (
      <Container>
        <Space mt="40" />
        <Typography size="2" weight="700">Resumen</Typography>
        <Space mt="40" />
        <FlexContainer
          flex
          justifyContent="start"
          alignItems="center"
          color="light"
        >

          <SummaryItem>
            <Typography size="2.5">
              $370000
            </Typography>
            <Typography weight="700">Balance actual</Typography>
          </SummaryItem>

          <SummaryItem>
            <Typography size="2.5">
              62
            </Typography>
            <Typography weight="700">Total de gastos</Typography>
          </SummaryItem>

          <SummaryItem>
            <Typography size="2.5">
              $865700
            </Typography>
            <Typography weight="700">Cantidad de gastos</Typography>
          </SummaryItem>
        </FlexContainer >
      </Container>
    );
  }

  return renderUI();
}