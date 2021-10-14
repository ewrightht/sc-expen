import React from "react";
import Modal, { ModalDescription, ModalTitle } from "../../../../styled/Modal";
import { ContainedButton, OutlinedButton } from "../../../../styled/Button";
import { FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { TextField } from "../../../../styled/TextField";

export default function AddBalanceModal(props) {
  const { setShowModal } = props;

  function renderUI() {
    return (
      <Modal {...props} size="sm">
        <ModalTitle>Agregar un nuevo balance</ModalTitle>
        <Space mt="10" />
        <ModalDescription>
          Agrega un nuevo balance a tu cuenta, este se sumará a tu balance actual.
        </ModalDescription>
        <Space mt="10" />
        <FlexContainer fluid>
          <TextField
            type="text"
            placeholder="Descripción"
            fullWidth
          />
          <Space ml="10" />
          <TextField
            type="number"
            placeholder="Monto"
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