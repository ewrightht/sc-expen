import React from "react";
import { ContainedButton } from "../../styled/Button";
import { Container, FlexContainer } from "../../styled/Container";

export default function Login() {

  function renderUI() {
    return (
      <Container>
        <FlexContainer fullHeight center middle>
          <ContainedButton color="primary">
            Primary button
          </ContainedButton>
        </FlexContainer>
      </Container>
    );
  }

  return renderUI();
}