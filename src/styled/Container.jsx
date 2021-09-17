import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.fluid ? "100%" : "80%"};
  height: ${props => props.fullHeight && "100vh"};
  margin: 0 auto;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${props =>
    props.theme.components.container.justifyContent[props.justifyContent]
  };
  align-items: ${props =>
    props.theme.components.container.alignItems[props.alignItems]
  };
`;