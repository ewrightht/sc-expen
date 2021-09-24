import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { darken } from "polished";

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled(NavLink)`
  width: 100%;
  padding: 15px;
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.active &&
    darken(0.04, props.theme.palette.light)};
  cursor: pointer;
  color: ${props => props.theme.palette.dark};

  > * {
    margin-right: 10px;
  }

  &.${props => props.activeClassName} {
    > * {
      color: ${props => props.theme.palette.primary};
    }
    background: ${(props) => darken(0.04, props.theme.palette.light)};
  }

  &:hover {
    background: ${(props) => darken(0.04, props.theme.palette.light)};
  }
`;