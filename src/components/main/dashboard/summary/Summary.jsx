import React, { useState } from "react";

import SummaryItems from "./summaryItems/SummaryItems";
import ExpendTable from "./expendTable/ExpendTable";
import NewBalanceModal from "./newBalanceModal/NewBalanceModal";

import { ContainedButton, Button } from "../../../../styled/Button";
import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";

export default function Summary() {
  const [openNewBalanceModal, setOpenNewBalanceModal] = useState(false);

  function handleOpenNewBalanceModal() {
    setOpenNewBalanceModal(true);
  }

  function renderUI() {
    return (
      <>
        <Container>
          <Space mt="40" />

          <FlexContainer flex justifyContent="between" alignItems="center" >
            <Typography size="1.5" weight="700">
              Resumen
            </Typography>
            <ContainedButton color="primary" onClick={handleOpenNewBalanceModal}>
              Agregar nuevo balance
            </ContainedButton>
          </FlexContainer>

          <Space mt="20" />
          <SummaryItems />

          <Space mt="40" />
          <Typography size="1.5" weight="700">
            Gastos recientes
          </Typography>
          <Space mt="20" />
          <FlexContainer justifyContent="start" alignItems="center" >
            <ContainedButton color="primary">Agregar un nuevo gasto</ContainedButton>
            <Space ml="10" />
            <Button>Ver todos los gastos</Button>
          </FlexContainer>

          <Space mt="20" />
          <ExpendTable />
        </Container>

        <NewBalanceModal
          showModal={openNewBalanceModal}
          setShowModal={setOpenNewBalanceModal}
        />
      </>
    );
  }

  return renderUI();
}