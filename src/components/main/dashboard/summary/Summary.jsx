import React, { useState } from "react";
import styled from "styled-components";

import { ContainedButton, Button, OutlinedButton } from "../../../../styled/Button";
import { Container, FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { Table } from "../../../../styled/Table";
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

          <FlexContainer flex justifyContent="between" alignItems="center" >
            <Typography size="1.5" weight="700">
              Resumen
            </Typography>
            <ContainedButton color="primary" onClick={handleOpenNewBalanceModal}>
              Agregar nuevo balance
            </ContainedButton>
          </FlexContainer>

          <Space mt="20" />
          <FlexContainer flex alignItems="center" >
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
          </FlexContainer >

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
          <Table>
            <thead>
              <tr>
                <th colSpan="2">Descripción</th>
                <th>Gasto</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    <i className="far fa-file-alt fa-lg"></i>
                    <Space ml="20" />
                    <span>Hamburguesa</span>
                  </span>
                </td>
                <td></td>
                <td>$12000</td>
                <td>10/10/21</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i className="far fa-file-alt fa-lg"></i>
                    <Space ml="20" />
                    <span>Ropa gucci</span>
                  </span>
                </td>
                <td></td>
                <td>$140000</td>
                <td>10/10/21</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i className="far fa-file-alt fa-lg"></i>
                    <Space ml="20" />
                    <span>Mantenimiento del carro</span>
                  </span>
                </td>
                <td></td>
                <td>$420000</td>
                <td>10/10/21</td>
              </tr>
            </tbody>
          </Table>

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