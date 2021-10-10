import styled from "styled-components";

export const Badge = styled.div`
  max-width: fit-content;
  padding: 2px 10px;
  background: ${props => props.theme.palette.secondary};
  color: ${props => props.theme.palette.white};
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
`;