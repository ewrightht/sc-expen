import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.fluid ? "100%" : "90%"};
  height: ${props => props.fullHeight && "100vh"};
  padding: 20px 0;
  margin: 0 auto;
  background: ${props => props.theme.palette[props.color] || "transparent"};
`;

export const FlexContainer = styled.div`
  display: flex;
  height: ${props => props.fullHeight && "100vh"};
  justify-content: ${props =>
    props.theme.components.container.justifyContent[props.justifyContent]
  };
  background: ${props => props.theme.palette[props.color] || "transparent"};
  align-items: ${props =>
    props.theme.components.container.alignItems[props.alignItems]
  };
  flex: ${props => props.flex && "1"};
  flex-wrap: ${props => props.wrap && "wrap"};
  flex-direction: ${props =>
    props.theme.components.container.flexDirection[props.flexDirection] || "row"};
`;