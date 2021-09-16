import React from "react";
import { ContainedButton } from "../../styled/Button";
import { Card } from "../../styled/Card";
import { Container, FlexContainer } from "../../styled/Container";
import { Space } from "../../styled/Space";
import { TextField } from "../../styled/TextField";

export default function Login() {

  function renderUI() {
    return (
      <FlexContainer fullHeight center middle>
        <Card size="md">
          <TextField
            type="email"
            fullWidth
            placeholder="Correo electrónico"
          />
          <Space mt="10" />
          <ContainedButton 
            color="primary" 
            size="lg"
            fullWidth
          >
            Iniciar sesión
          </ContainedButton>
        </Card>
      </FlexContainer>
    );
  }

  return renderUI();
}