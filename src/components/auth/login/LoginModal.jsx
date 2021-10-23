import React from "react";
import shallow from "zustand/shallow";

import Modal from "../../../styled/Modal";
import { FlexContainer } from "../../../styled/Container";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import { ContainedButton, OutlinedButton } from "../../../styled/Button";
import { Space } from "../../../styled/Space";

import { useForm } from "../../../hooks/useForm";
import { useStores } from "../../../stores/useStores";

const NO_REGISTERED_VALUES = {
  registerUsername: "",
  registerPassword: "",
  confirmPassword: "",
};

export default function LoginModal(props) {
  const { setShowModal, showModal } = props;

  const [
    formValues, handleInputChange, reset
  ] = useForm(NO_REGISTERED_VALUES);

  const { registerUser = function () { } } = useStores(state => ({
    registerUser: state.registerUser
  }), shallow);

  function emptyFields() {
    let { registerUsername, registerPassword, confirmPassword } = formValues;
    if (
      !registerPassword.length || !confirmPassword.length || !registerUsername
    ) return true;
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const { registerUsername, registerPassword, confirmPassword } = formValues;
    if (registerPassword === confirmPassword) {
      const registerResponse = await registerUser(
        showModal.responseEmail.email,
        registerUsername,
        registerPassword
      );
      
    } else {
      alert("Las contraseñas no coinciden");
    }
  }

  function closeLoginForm() {
    reset();
    setShowModal({ visible: false });
  }

  function renderLoginUser() {
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
            onClick={closeLoginForm}
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
      <form onSubmit={handleRegisterSubmit}>
        <Typography size="1.3" weight="600">
          Crea tu nueva cuenta
        </Typography>
        <Space mt="10" />
        <Typography color="gray">
          Este correo no se ha registrado anteriormente, rellena los campos para continuar con el registro.
        </Typography>
        <Space mt="10" />
        <TextField
          type="text"
          fullWidth
          placeholder="Nombre de usuario"
          name="registerUsername"
          onChange={handleInputChange}
          required
        />
        <Space mt="10" />
        <FlexContainer flex>
          <TextField
            type="password"
            fullWidth
            placeholder="Contraseña"
            name="registerPassword"
            onChange={handleInputChange}
            required
          />
          <Space ml="10" />
          <TextField
            type="password"
            fullWidth
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            onChange={handleInputChange}
            required
          />
        </FlexContainer>
        <Space mt="20" />
        <FlexContainer fluid justifyContent="end">
          <OutlinedButton
            color="primary"
            onClick={closeLoginForm}
          >
            Cancelar
          </OutlinedButton>
          <Space ml="5" />
          <ContainedButton
            type="submit"
            color="primary"
            disabled={emptyFields()}
          >
            Confirmar
          </ContainedButton>
        </FlexContainer>
      </form>
    );
  }

  function renderUI() {
    return (
      <Modal
        showModal={showModal.visible}
        setShowModal={setShowModal}
        size="md"
        onClose={closeLoginForm}
      >
        {showModal.responseEmail?.account === "NEW" && renderNoRegisteredUser()}
        {showModal.responseEmail?.account === "EXIST" && renderLoginUser()}
      </Modal>
    );
  }

  return renderUI();
}