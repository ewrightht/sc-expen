import React, { useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { Card } from "./Card";

const slip = keyframes`
  from {
    transform: translateY(-50px);
  }

  to {
    transform: translateY(0px);
  }
`;

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${opacity} .2s ease-out;

  ${Card} {
    animation: ${slip} .5s ease-out;
  }

`;

export const ModalTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;

export const ModalDescription = styled.p`
  color: ${props => props.theme.palette.gray};
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
`;

export default function Modal(props) {
  const { children, showModal, setShowModal, size, onClose } = props;
  const modalRef = useRef();

  function handleCloseModal(event) {
    if (modalRef.current === event.target) {
      onClose();
      setShowModal({ visible: false });
    }
  }

  function renderUI() {
    return (
      <Fragment>
        {showModal ? (
          <ModalWrapper
            ref={modalRef}
            onClick={handleCloseModal}
          >
            <Card size={size}>{children}</Card>
          </ModalWrapper>
        ) : (
          null
        )}
      </Fragment>
    );
  }

  return ReactDOM.createPortal(renderUI(), document.querySelector("#modal"));
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
};