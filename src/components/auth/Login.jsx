import React from "react";
import { ContainedButton } from "../../styled/Button";
import { Card } from "../../styled/Card";
import { Container, FlexContainer } from "../../styled/Container";

export default function Login() {

  function renderUI() {
    return (
      <FlexContainer fullHeight center middle>
        <Card>
          <ContainedButton color="primary" size="md">
            Primary button
          </ContainedButton>
        </Card>
      </FlexContainer>
    );
  }

  return renderUI();
}