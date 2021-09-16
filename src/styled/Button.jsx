import styled from "styled-components";
import { darken, lighten } from "polished";

export const Button = styled.button`
  border: 1px solid transparent;
  padding: ${props => 
    props.size ?
      props.theme.components.button[props.size] : 
      props.theme.components.button["sm"]};
  border-radius: 3px;
  font-weight: 500;
  color: inherit;
  cursor: pointer;
`;
export const ContainedButton = styled(Button)`
  background: ${props => props.theme.palette[props.color]};
  color: white;

  &:hover {
    background: ${props => darken(
      0.1,
      props.theme.palette[props.color]
    )};
  }
`;
export const OutlinedButton = styled(Button)`
  border-color: ${props => props.theme.palette[props.color]};
  background: transparent;
  color: ${props => props.theme.palette[props.color]};

  &:hover {
    background: ${props => lighten(
      0.6,
      props.theme.palette[props.color]
    )};
  }
`;