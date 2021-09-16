import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.fluid ? "100%" : "80%"};
  margin: 0 auto;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  height: ${props => props.fullHeight && "100vh"};
  justify-content: ${props => props.center && "center"};
  align-items: ${props => props.middle && "center"};
`;