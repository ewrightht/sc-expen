import React, { useEffect } from "react";
import shallow from "zustand/shallow";

import { Badge } from "../../../../../styled/Badge";
import { Space } from "../../../../../styled/Space";
import { Table } from "../../../../../styled/Table";

import { useStores } from "../../../../../stores/useStores";

export default function ExpensesTable() {
  const { isLoading, expenses, getExpenses } = useStores(state => ({
    isLoading: state.isLoading,
    expenses: state.expenses,
    getExpenses: state.getExpenses
  }), shallow);

  async function fetchExpenses() {
    await getExpenses();
  }

  useEffect(function () {
    fetchExpenses();
  }, []);

  function renderTableRow() {
    return expenses.map((expense) => {
      let { id, name, color, pantone_value, year } = expense;

      return (
        <tr key={id}>
          <td>
            <span>
              <i className="far fa-file-alt fa-lg"></i>
              <Space ml="20" />
              <span>{name}</span>
            </span>
          </td>
          <td></td>
          <td>${pantone_value}</td>
          <td>
            <Badge color={color}>
              {name}
            </Badge>
          </td>
          <td>{year}</td>
        </tr>
      );
    });
  }

  function renderUI() {
    if (isLoading) return <h2>Loading...</h2>
    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="2">Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow()}
        </tbody>
      </Table>
    );
  }
  return renderUI();
}