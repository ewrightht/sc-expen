import React, { useState } from "react";

import LoginImage from '../../../assets/images/login.svg';

import { ContainedButton } from "../../../styled/Button";
import { Card } from "../../../styled/Card";
import { FlexContainer } from "../../../styled/Container";
import { Image } from "../../../styled/Image";
import { Space } from "../../../styled/Space";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import LoginModal from "./LoginModal";

import { useForm } from "../../../hooks/useForm";

const LOGIN_FIELDS = { loginEmail: "" };

export default function Login() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [formValues, handleInputChange] = useForm(LOGIN_FIELDS);

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
  }

  function isEmptyField() {
    let { loginEmail } = formValues;
    if (!loginEmail.length) return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function renderUI() {
    return (
      <FlexContainer
        flex
        fullHeight
        justifyContent="center"
        alignItems="center"
        color="light"
      >
        <Card size="md">
          <FlexContainer justifyContent="center">
            <Image fluid src={LoginImage} width="70%" alt="" />
          </FlexContainer>
          <Space mt="20" />
          <Typography centered size="1.5" weight="700">
            Monitorea tu dinero y empieza a ahorrar con nosotros.
          </Typography>
          <Space mt="15" />
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              fullWidth
              placeholder="Correo electrónico"
              name="loginEmail"
              onClick={handleInputChange}
            />
            <Space mt="10" />
            <ContainedButton
              type="submit"
              color="primary"
              size="lg"
              fullWidth
              onClick={handleOpenLoginModal}
              disabled={isEmptyField()}
            >
              Iniciar sesión
            </ContainedButton>
          </form>
        </Card>
        <LoginModal
          showModal={openLoginModal}
          setShowModal={setOpenLoginModal}
        />
      </FlexContainer>
    );
  }

  return renderUI();
}