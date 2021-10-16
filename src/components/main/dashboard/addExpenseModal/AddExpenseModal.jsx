import React from "react";
import Modal, { ModalDescription, ModalTitle } from "../../../../styled/Modal";
import { ContainedButton, OutlinedButton } from "../../../../styled/Button";
import { FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { TextField } from "../../../../styled/TextField";

export default function AddExpenseModal(props) {
  const { setShowModal } = props;

  function renderUI() {
    return (
      <Modal {...props} size="sm" onClose={() => setShowModal(false)}>
        <ModalTitle>Agregar un nuevo gasto</ModalTitle>
        <Space mt="10" />
        <ModalDescription>
          Agrega un nuevo gasto a tu cuenta, este se sumará a tus gastos.
        </ModalDescription>
        <Space mt="10" />
        <TextField
          type="text"
          placeholder="Descripción"
          fullWidth
        />
        <Space mt="10" />
        <FlexContainer fluid justifiyContent="center">
          <TextField
            type="number"
            placeholder="Monto"
            fullWidth
          />
          <Space ml="10" />
          <TextField
            type="text"
            placeholder="Categoría"
            fullWidth
          />
        </FlexContainer>
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