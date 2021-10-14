import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { darken } from "polished";

const Item = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  text-decoration: none;
  &.${props => props.activeClassName} {
    background: ${props => darken(0.1, props.theme.palette.primaryDark)};
  }
  &:hover {
    background: ${props => darken(0.1, props.theme.palette.primary)};
  }
`;

export default Item;