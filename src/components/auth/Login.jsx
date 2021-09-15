import React from "react";
import { ContainedButton } from "../../styled/Button";
import { Container } from "../../styled/Container";

export default function Login() {

  function renderUI() {
    return (
      <Container>
        <ContainedButton color="primary">Hello world</ContainedButton>
      </Container>
    );
  }

  return renderUI();
}