import React from "react";

import ExpensesTable from "./expensesTable/ExpensesTable";

import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";
import { TextField } from "../../../../styled/TextField";
import { ContainedButton } from "../../../../styled/Button";

export default function Expenses(props) {
  const { handleOpenAddExpenseModal = function () { } } = props;

  function renderUI() {
    return (
      <Container>
        <FlexContainer flexDirection="column">
          <Typography size="1.5" weight="700">
            Gastos
          </Typography>
          <Typography size="0.9">
            Aquí encontrarás todos tus gastos y sus respectivas categorías.
          </Typography>
        </FlexContainer>
        <Space mt="20" />
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

        <Space mt="30" />
        <ExpensesTable />
      </Container>
    );
  }

  return renderUI();
}