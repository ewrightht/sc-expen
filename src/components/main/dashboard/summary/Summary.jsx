import React from "react";
import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";

export default function Summary() {

  function renderUI() {
    return (
      <Container>
        <Space mt="40" />
        <Typography size="2" weight="700">Resumen</Typography>
        <Space mt="40" />
        <FlexContainer
          flex
          justifyContent="between"
          alignItems="center"
        >

          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography size="2.5">
              $370000
            </Typography>
            <Typography weight="700">Balance actual</Typography>
          </FlexContainer>

          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography size="2.5">
              62
            </Typography>
            <Typography weight="700">Total de gastos</Typography>
          </FlexContainer>

          <FlexContainer
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography size="2.5">
              $865700
            </Typography>
            <Typography weight="700">Cantidad de gastos</Typography>
          </FlexContainer>
        </FlexContainer >
      </Container>
    );
  }

  return renderUI();
}