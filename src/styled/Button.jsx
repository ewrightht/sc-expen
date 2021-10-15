import styled from "styled-components";
import { darken, lighten } from "polished";

export const Button = styled.button`
  border: 1px solid transparent;
  line-height: 30px;
  outline: none;
  padding: ${props =>
    props.size ?
      props.theme.components.button.size[props.size] :
      props.theme.components.button.size.sm};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 600;
  background: ${props => lighten(0.6, props.theme.palette.primary)};
  width: ${props => props.fullWidth && "100%"};
  color: ${props => props.theme.palette.primary};
  font-size: ${props => props.theme.components.button.fontSize};
  :disabled {
    background: #EDEBE9;
    color: #CAC9C7;
    border-color: transparent;
    cursor: default;

    &:hover {
      background: #EDEBE9;
      color: #CAC9C7;
    }
  }
  cursor: pointer;
`;
export const ContainedButton = styled(Button)`
  background: ${props => props.theme.palette[props.color]};
  color: ${props => props.theme.palette.white};
  &:hover {
    background: ${props =>
      darken(0.1, props.theme.palette[props.color])
    };
    color: ${props => props.theme.palette.white};
  }
`;
export const OutlinedButton = styled(Button)`
  border-color: ${props => props.theme.palette[props.color]};
  background: transparent;
  color: ${props => props.theme.palette[props.color]};

  &:hover {
    background: ${props => 
      lighten(0.6, props.theme.palette[props.color])
    };
  }
`;