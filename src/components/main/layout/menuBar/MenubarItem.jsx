import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  &:hover {
    background: ${props => darken(0.1, props.theme.palette.primary)};
  }
`;

export default function MenubarItem(props) {
  const { children } = props;

  function renderUI() {
    return (
      <Item>
        {children}
      </Item>
    );
  }

  return renderUI();
}