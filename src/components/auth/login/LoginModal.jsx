import React from "react";
import Modal from "../../../styled/Modal";
import { FlexContainer } from "../../../styled/Container";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import { ContainedButton, OutlinedButton } from "../../../styled/Button";
import { Space } from "../../../styled/Space";

export default function LoginModal(props) {
  const { setShowModal } = props;

  function renderRegisteredUser() {
    return (
      <>
        <Typography size="1.3" weight="600">
          Ya estás registado
        </Typography>
        <Space mt="10" />
        <Typography color="gray">
          Este correo se ha registrado anteriormente, digite su contraseña para continuar.
        </Typography>
        <Space mt="10" />
        <TextField
          type="password"
          fullWidth
          placeholder="Contraseña"
        />
        <Space mt="15" />
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
      </>
    );
  }

  function renderNoRegisteredUser() {
    return (
      <>
        <Typography size="1.3" weight="600">
          Crea tu nueva cuenta
        </Typography>
        <Space mt="10" />
        <Typography color="gray">
          Este correo no se ha registrado anteriormente, rellena los campos para continuar con el registro.
        </Typography>
        <Space mt="10" />
        <FlexContainer flex>
          <TextField
            type="password"
            fullWidth
            placeholder="Contraseña"
          />
          <Space ml="10" />
          <TextField
            type="password"
            fullWidth
            placeholder="Confirmar contraseña"
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
      </>
    );
  }

  function renderUI() {
    return (
      <Modal {...props} size="md">
        {renderNoRegisteredUser()}
      </Modal>
    );
  }

  return renderUI();
}