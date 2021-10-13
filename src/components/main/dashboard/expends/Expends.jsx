import React from "react";

import ExpendsTable from "./expendsTable/ExpendsTable";

import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";
import { TextField } from "../../../../styled/TextField";
import { ContainedButton } from "../../../../styled/Button";

export default function Expends(props) {
  const { handleOpenAddExpenseModal = function () { } } = props;

  function renderUI() {
    return (
      <Container>
        <Typography size="1.5" weight="700">
          Gastos
        </Typography>

        <Space mt="10" />
        <FlexContainer justifyContent="between">
          <TextField
            type="text"
            placeholder="Buscar gasto"
          />
          <ContainedButton
            color="primary"
            size="md"
            onClick={handleOpenAddExpenseModal}
          >
            Agregar nuevo gasto
          </ContainedButton>
        </FlexContainer>

        <Space mt="20" />
        <ExpendsTable />
      </Container>
    );
  }

  return renderUI();
}