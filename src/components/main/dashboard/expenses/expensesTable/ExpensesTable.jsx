import React, { useEffect } from "react";
import shallow from "zustand/shallow";

import { Badge } from "../../../../../styled/Badge";
import { Space } from "../../../../../styled/Space";
import { Table } from "../../../../../styled/Table";
import { Loader } from "../../../../../styled/Loader";

import { useStores } from "../../../../../stores/useStores";
import moment from "moment";

export default function ExpensesTable() {
  const { expenses, getAllExpenses } = useStores(state => ({
    getAllExpenses: state.getAllExpenses,
    expenses: state.expenses,
  }), shallow);

  useEffect(function () {
    (async function () {
      await getAllExpenses();
    })();
  }, []);

  function renderTableRow() {
    return expenses.map((expense) => {
      return (
        <tr key={expense.activity_id}>
          <td>
            <span>
              <i className="far fa-file-alt fa-lg"></i>
              <Space ml="20" />
              <span>{expense.activity_desc}</span>
            </span>
          </td>
          <td></td>
          <td>${expense.activity_amount}</td>
          <td>
            <Badge>
              {expense.activity_category}
            </Badge>
          </td>
          <td>{moment(expense.activity_date).format("DD/MM/yyyy")}</td>
        </tr>
      );
    });
  }

  function renderUI() {
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
  if (!expenses) return <Loader />

  return renderUI();
}