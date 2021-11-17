import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { darken, rgba } from "polished";

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled(NavLink)`
  width: 100%;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  color: ${props => props.theme.palette.dark};
  
  > * {
    margin-right: 10px;
    font-size: 0.8125rem;
  }

  &.${props => props.activeClassName} {
    > * {
      color: ${props => props.theme.palette.primary};
    }
    background: ${(props) => rgba(props.theme.palette.light, 1)};
  }

  &:hover {
    background: ${(props) => rgba(props.theme.palette.light, 1)};
  }
`;