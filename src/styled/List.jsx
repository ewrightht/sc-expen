import { darken } from "polished";
import styled from "styled-components";

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 15px;
  font-weight: 500  ;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.active &&
    darken(0.05, props.theme.palette.light)};
  color: ${props => props.active && props.theme.palette.primary};

  >* {
    margin-right: 10px;
  }

  &:hover {
    background: ${(props) => darken(0.05, props.theme.palette.light)};
  }
`;