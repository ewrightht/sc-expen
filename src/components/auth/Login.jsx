import React from "react";

import LoginImage from '../../assets/images/login.svg';

import { ContainedButton } from "../../styled/Button";
import { Card } from "../../styled/Card";
import { FlexContainer } from "../../styled/Container";
import { Image } from "../../styled/Image";
import { Space } from "../../styled/Space";
import { TextField } from "../../styled/TextField";
import { Typography } from "../../styled/Typography";

export default function Login() {

  function renderUI() {
    return (
      <FlexContainer fullHeight center middle>
        <Card size="md">
          <FlexContainer center>
            <Image fluid src={LoginImage} width="70%" alt="" />
          </FlexContainer>
          <Typography centered size="1.5" weight="700">
            Monitorea tu dinero y ahorra
          </Typography>
          <TextField type="email" fullWidth placeholder="Correo electrónico" />
          <Space mt="10" />
          <ContainedButton color="primary" size="lg" fullWidth disabled>
            Iniciar sesión
          </ContainedButton>
        </Card>
      </FlexContainer>
    );
  }

  return renderUI();
}