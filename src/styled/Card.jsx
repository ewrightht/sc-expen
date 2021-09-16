import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-shadow: 0px 3px 5px #dcdcdc;
  padding: 20px;
  border-radius: ${props => props.borderRadius};
`;