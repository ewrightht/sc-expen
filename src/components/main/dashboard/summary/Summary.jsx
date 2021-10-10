import React, { useState } from "react";
import { Link } from "react-router-dom";

import SummaryItems from "./summaryItems/SummaryItems";
import SummaryTable from "./summaryTable/SummaryTable";
import NewBalanceModal from "./newBalanceModal/NewBalanceModal";

import { ContainedButton, Button } from "../../../../styled/Button";
import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";

import routes from "../../../../constants/routes";

export default function Summary() {
  const [openNewBalanceModal, setOpenNewBalanceModal] = useState(false);

  function handleOpenNewBalanceModal() {
    setOpenNewBalanceModal(true);
  }

  function renderUI() {
    return (
      <>
        <Container>

          <Space mt="20" />
          <Typography size="1.5" weight="700">
            Resumen
          </Typography>

          <Space mt="20" />
          <SummaryItems />

          <Space mt="40" />
          <Typography size="1.5" weight="700">
            Actividad reciente
          </Typography>

          <Space mt="20" />
          <FlexContainer justifyContent="start" alignItems="center" >
            <ContainedButton color="primary">Agregar nuevo gasto</ContainedButton>
            <Space ml="10" />
            <ContainedButton color="primary" onClick={handleOpenNewBalanceModal}>
              Sumar nuevo balance
            </ContainedButton>
            <Space ml="10" />
            <Link to={routes.dashboardExpends}>
              <Button>Ver todos los gastos</Button>
            </Link>
            <Space ml="10" />
            <Link to={routes.dashboardAdditions}>
              <Button>Ver todas las adiciones</Button>
            </Link>
          </FlexContainer>

          <Space mt="20" />
          <SummaryTable />
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