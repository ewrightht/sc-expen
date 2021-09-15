import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.fluid ? "100%" : "80%"};
  margin: 0 auto;
`;