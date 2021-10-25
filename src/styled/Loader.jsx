import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  100% { 
    transform: rotate(-360deg);
  }
`;

const Spinner = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
    0 -2em rgba(10, 61, 98, 1),
    1.25em -1.25em rgba(10, 61, 98, 0.875),
    2em 0 rgba(10, 61, 98, 0.75),
    1.25em 1.25em rgba(10, 61, 98, 0.625),
    0 2em rgba(10, 61, 98, 0.5),
    -1.25em 1.25em rgba(10, 61, 98, 0.375),
    -2em 0 rgba(10, 61, 98, 0.25),
    -1.25em -1.25em rgba(10, 61, 98, 0.125)
    ;
  animation: ${spin} 1.2s linear infinite;
`;

export function Loader() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}