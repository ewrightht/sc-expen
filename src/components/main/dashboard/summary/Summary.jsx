import React, { useState } from "react";
import styled from "styled-components";

import { ContainedButton } from "../../../../styled/Button";
import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Typography } from "../../../../styled/Typography";
import NewBalanceModal from "./newBalanceModal/NewBalanceModal";

const SummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.light};
`;

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
          <FlexContainer
            flex
            justifyContent="between"
            alignItems="center"
          >
            <Typography size="1.5" weight="700">Resumen</Typography>
            <ContainedButton color="primary" onClick={handleOpenNewBalanceModal}>
              Agregar nuevo balance
            </ContainedButton>
          </FlexContainer>
          <Space mt="40" />
          <FlexContainer
            flex
            justifyContent="evenly"
            alignItems="center"
          >
            <SummaryItem>
              <Typography size="1.5" weight="600">
                $370000
              </Typography>
              <Space mt="2" />
              <Typography weight="400">
                Balance actual
              </Typography>
            </SummaryItem>

            <SummaryItem>
              <Typography size="1.5" weight="600">
                62
              </Typography>
              <Space mt="2" />
              <Typography weight="400">
                Total de gastos
              </Typography>
            </SummaryItem>

            <SummaryItem>
              <Typography size="1.5" weight="600">
                $865700
              </Typography>
              <Space mt="2" />
              <Typography weight="400">
                Cantidad de gastos
              </Typography>
            </SummaryItem>
          </FlexContainer >
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