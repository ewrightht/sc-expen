import { lighten } from "polished";
import styled from "styled-components";

export const Badge = styled.div`
  max-width: fit-content;
  padding: 4px 10px;
  background: ${props => props.color || lighten(0, props.theme.palette.primary)};
  color: ${props => props.theme.palette.white};
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
`;