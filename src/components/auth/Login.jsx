import React from "react";
import { ContainedButton } from "../../styled/Button";

export default function Login() {

  function renderUI() {
    return (
      <div style={{ margin: '10px' }}>
        <ContainedButton color="primary">Hello world</ContainedButton>
      </div>
    );
  }

  return renderUI();
}