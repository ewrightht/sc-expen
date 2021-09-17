import React from "react";
import Modal from "../../../styled/Modal";

import { FlexContainer } from "../../../styled/Container";
import { TextField } from "../../../styled/TextField";
import { Typography } from "../../../styled/Typography";
import { ContainedButton, OutlinedButton } from "../../../styled/Button";
import { Space } from "../../../styled/Space";

export default function LoginModal(props) {
  const { setShowModal } = props;

  function renderUI() {
    return (
      <Modal {...props}>
        <Typography size="1.5" weight="700">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Space mt="10" />
        <TextField fullWidth placeholder="Lorem Ipsum dolor" />
        <Space mt="15" />
        <FlexContainer fluid justifyContent="start">
          <OutlinedButton
            color="primary"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </OutlinedButton>
          <Space ml="5" />
          <ContainedButton color="primary">
            Confirmar
          </ContainedButton>
        </FlexContainer>
      </Modal>
    );
  }

  return renderUI();
}