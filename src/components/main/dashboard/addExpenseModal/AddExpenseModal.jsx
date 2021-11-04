import React from "react";
import shallow from "zustand/shallow";

import Modal, { ModalDescription, ModalTitle } from "../../../../styled/Modal";
import { ContainedButton, OutlinedButton } from "../../../../styled/Button";
import { FlexContainer } from "../../../../styled/Container";
import { Space } from "../../../../styled/Space";
import { TextField } from "../../../../styled/TextField";

import { useStores } from "../../../../stores/useStores";
import { useForm } from "../../../../hooks/useForm";

const INITIAL_VALUES = {
  expense_desc: "",
  expense_amount: "",
  expense_category: "",
};

export default function AddExpenseModal(props) {
  const { showModal, setShowModal } = props;
  const { createExpenseActivity } = useStores((state) => ({
    createExpenseActivity: state.createExpenseActivity
  }), shallow);
  const [formValues, handleInputChange, resetFields] = useForm(INITIAL_VALUES);

  function handleCloseModal() {
    resetFields();
    setShowModal({ visible: false });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const {
      expense_desc, expense_amount, expense_category
    } = formValues;

    createExpenseActivity(expense_desc, expense_amount, expense_category);
    handleCloseModal();
  }

  function renderUI() {
    return (
      <Modal
        showModal={showModal.visible}
        setShowModal={setShowModal}
        onClose={resetFields}
        size="sm"
      >
        <form onSubmit={handleFormSubmit}>
          <ModalTitle>Agregar un nuevo gasto</ModalTitle>
          <Space mt="10" />
          <ModalDescription>
            Agrega un nuevo gasto a tu cuenta, este se sumará a tus gastos.
          </ModalDescription>
          <Space mt="10" />
          <TextField
            type="text"
            placeholder="Descripción"
            name="expense_desc"
            onChange={handleInputChange}
            required
            fullWidth
          />
          <Space mt="10" />
          <FlexContainer fluid justifiyContent="center">
            <TextField
              type="number"
              placeholder="Monto"
              name="expense_amount"
              onChange={handleInputChange}
              required
              fullWidth
            />
            <Space ml="10" />
            <TextField
              type="text"
              placeholder="Categoría"
              name="expense_category"
              onChange={handleInputChange}
              fullWidth
            />
          </FlexContainer>
          <Space mt="20" />
          <FlexContainer fluid justifyContent="end">
            <OutlinedButton
              type="button"
              color="primary"
              onClick={handleCloseModal}
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
      </Modal>
    );
  }

  return renderUI();
}