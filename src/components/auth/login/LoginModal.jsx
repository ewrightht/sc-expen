import React from "react";
import Modal from "../../../styled/Modal";

import { FlexContainer } from "../../../styled/Container";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import { ContainedButton, OutlinedButton } from "../../../styled/Button";
import { Space } from "../../../styled/Space";

export default function LoginModal(props) {
  const { setShowModal } = props;

  function renderUI() {
    return (
      <Modal {...props} size="md">
        <Typography size="1.5" weight="700">
          Ya eres parte de nosotros, ingrese su contraseña para continuar.
        </Typography>
        <Space mt="10" />
        <TextField
          type="password"
          fullWidth 
          placeholder="Contraseña"
        />
        <Space mt="15" />
        <FlexContainer fluid justifyContent="start">
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