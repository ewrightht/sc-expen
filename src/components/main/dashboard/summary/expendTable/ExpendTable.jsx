import React from "react";
import { Table } from "../../../../../styled/Table";
import { Space } from "../../../../../styled/Space";

export default function ExpendTable() {

  function renderTableRow(desc, value, date) {
    return (
      <tr>
        <td>
          <span>
            <i className="far fa-file-alt fa-lg"></i>
            <Space ml="20" />
            <span>{desc}</span>
          </span>
        </td>
        <td></td>
        <td>${value}</td>
        <td>{date}</td>
      </tr>
    );
  }

  function renderUI() {
    return (
      <Table>
        <thead>
          <tr>
            <th colSpan="2">Descripción</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow("Hamburguesa", "12000", "10/12/2021")}
          {renderTableRow("Ropa", "10000", "10/12/2021")}
          {renderTableRow("Mantenimiento", "200000", "10/12/2021")}
          {renderTableRow("Forro de celular", "15000", "10/12/2021")}
          {renderTableRow("Memoria Ssd", "157000", "10/12/2021")}
          {renderTableRow("Almuerzo", "11300", "10/12/2021")}
        </tbody>
      </Table>
    );
  }

  return renderUI();
}