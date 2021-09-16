import styled from "styled-components";

export const Image = styled.img`
  max-width: ${props => props.fluid && '100%'};
`;