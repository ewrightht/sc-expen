import styled from "styled-components";

export const TextField = styled.input`
  outline: 0;
  width: ${props => props.fullWidth && "100%"};
  background: ${props => props.theme.palette.light};
  padding: 10px;
  font-size: 13px;
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius};

  &:focus {
    border-color: ${props => props.theme.palette.primary};
  }
`;