import styled from "styled-components";

export const Space = styled.div`
  margin-top: ${props => props.mt}px;
  margin-bottom: ${props => props.mb}px;
  margin-left: ${props => props.ml}px;
  margin-right: ${props => props.mr}px;

  padding-top: ${props => props.pt}px;
  padding-bottom: ${props => props.pb}px;
  padding-left: ${props => props.pl}px;
  padding-right: ${props => props.pr}px;
`;