import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;

  thead {
    text-align: left;
    border-bottom: 2px solid ${props => props.theme.palette.light};
  }

  tbody {
    tr {
      border-radius: ${props => props.theme.borderRadius};
      &:hover {
        background: ${props => props.theme.palette.light};
      }
    }
  }

  td {
    font-weight: 500;

    span {
      display: inline-flex;
      align-items: center;
      -webkit-box-align: center;
    }
  }

  td, th {
    padding: 15px;
  }
`;
