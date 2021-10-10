import React from "react";
import Modal from "../../../../styled/Modal";
import { ContainedButton, OutlinedButton } from "../../../../styled/Button";
import { FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { TextField } from "../../../../styled/TextField";
import { Typography } from "../../../../styled/Typography";

export default function AddExpenseModal(props) {
  const { setShowModal } = props;

  function renderUI() {
    return (
      <Modal {...props} size="sm">
        <Typography size="1.3" weight="600">
          Agregar nuevo gasto
        </Typography>
        <Space mt="10" />
        <Typography color="gray">
          Agrega un nuevo gasto a tu cuenta, este se sumará a tus gastos.
        </Typography>
        <Space mt="10" />
        <TextField
          type="number"
          placeholder="Nuevo gasto"
          fullWidth
        />
        <Space mt="20" />
        <FlexContainer fluid justifyContent="end">
          <OutlinedButton
            color="primary"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </OutlinedButton>
          <Space ml="5" />
          <ContainedButton color="primary">
            Confirmar
          </ContainedButton>
        </FlexContainer>
      </Modal>
    );
  }

  return renderUI();
}