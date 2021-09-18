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

export default function Login() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function renderUI() {
    return (
      <FlexContainer
        fullHeight
        fluid
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
            />
            <Space mt="10" />
            <ContainedButton
              type="submit"
              color="primary"
              size="lg"
              fullWidth
              onClick={handleOpenLoginModal}
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