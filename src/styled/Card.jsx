import styled from 'styled-components';

export const Card = styled.div`
  width: ${props => 
    props.size ?
      props.theme.components.card.size[props.size] 
      : props.theme.components.card.size.sm};
  background: white;
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
`;