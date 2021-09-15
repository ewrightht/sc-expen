import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  border: 1px solid transparent;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 15px;
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
  color: ${props => props.theme.palette[props.color]}
`;