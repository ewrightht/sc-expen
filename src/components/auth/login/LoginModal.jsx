import React from "react";
import shallow from "zustand/shallow";
import { toast } from "react-toastify";

import Modal from "../../../styled/Modal";
import { FlexContainer } from "../../../styled/Container";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import { ContainedButton, OutlinedButton } from "../../../styled/Button";
import { Space } from "../../../styled/Space";

import { useForm } from "../../../hooks/useForm";
import { useStores } from "../../../stores/useStores";

const UNREGISTERED_USER_VALUES = {
  registerUsername: "",
  registerPassword: "",
  confirmPassword: "",
};

const REGISTERED_USER_VALUES = {
  loginPassword: ""
};

export default function LoginModal(props) {
  const { setShowModal, showModal } = props;

  const [
    registerFormValues, handleInputRegisterChange, registerResetFields
  ] = useForm(UNREGISTERED_USER_VALUES);

  const [
    loginFormValues, handleInputLoginChange, loginResetFields
  ] = useForm(REGISTERED_USER_VALUES);

  const { registerUser, loginUser } = useStores(state => ({
    registerUser: state.registerUser,
    loginUser: state.loginUser,
  }), shallow);

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    const {
      registerUsername, registerPassword, confirmPassword
    } = registerFormValues;

    if (registerPassword === confirmPassword) {
      await registerUser(
        showModal.email,
        registerUsername,
        registerPassword
      );
    } else {
      toast.error("Aségurate que las contraseñas coincidan");
    }
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();
    const { loginPassword } = loginFormValues;

    if (loginPassword.length > 0) {
      await loginUser(showModal.email, loginPassword);
    } else {
      toast.error("Por favor, ingrese la contraseña de su cuenta.");
    }
  }

  function closeLoginForm() {
    registerResetFields();
    loginResetFields();
    setShowModal({ visible: false });
  }

  function renderLoginUser() {
    return (
      <form onSubmit={handleLoginSubmit}>
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
          name="loginPassword"
          onChange={handleInputLoginChange}
          required
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
          <ContainedButton
            color="primary"
            type="submit"
          >
            Confirmar
          </ContainedButton>
        </FlexContainer>
      </form>
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
          onChange={handleInputRegisterChange}
          required
        />
        <Space mt="10" />
        <FlexContainer flex>
          <TextField
            type="password"
            fullWidth
            placeholder="Contraseña"
            name="registerPassword"
            onChange={handleInputRegisterChange}
            required
          />
          <Space ml="10" />
          <TextField
            type="password"
            fullWidth
            placeholder="Confirmar contraseña"
            name="confirmPassword"
            onChange={handleInputRegisterChange}
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
      >
        {showModal.account === "NEW" && renderNoRegisteredUser()}
        {showModal.account === "EXIST" && renderLoginUser()}
      </Modal>
    );
  }

  return renderUI();
}