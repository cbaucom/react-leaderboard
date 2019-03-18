import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;

  thead th {
    border-bottom: 2px solid #dedede;
  }

  tr {
    border-bottom: 1px solid #dedede;
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
`;

const ButtonContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 0.5rem;
  }
`;

export { Table, ButtonContainer };
