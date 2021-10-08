import styled from "styled-components";

export const Typography = styled.p`
  font-size: ${props => props.size || 0.9}rem;
  text-align: ${props => props.centered && 'center'};
  font-weight: ${props => props.weight};
  color: ${props => props.theme.palette[props.color] ||
    props.theme.palette.dark};
  margin: 0;
  line-height: 1.4;
  display: inline-block;
`;