import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card } from "./Card";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Modal(props) {
  const { children, showModal, setShowModal } = props;
  const modalRef = useRef();

  function handleCloseModal(event) {
    if (modalRef.current === event.target) {
      setShowModal(false);
    }
  }

  function renderUI() {
    return (
      <>
        {showModal ? (
          <ModalWrapper ref={modalRef} onClick={handleCloseModal}>
            <Card>{children}</Card>
          </ModalWrapper>
        ) : (
          null
        )}
      </>
    );
  }

  return renderUI();
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
};