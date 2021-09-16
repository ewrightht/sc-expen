import styled from "styled-components";

export const Typography = styled.p`
  font-size: ${props => props.size}rem;
  text-align: ${props => props.centered && 'center'};
  font-weight: ${props => props.weight};
`;