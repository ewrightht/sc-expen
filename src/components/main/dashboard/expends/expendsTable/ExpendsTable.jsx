import React from "react";
import { Badge } from "../../../../../styled/Badge";
import { Space } from "../../../../../styled/Space";
import { Table } from "../../../../../styled/Table";

export default function ExpendsTable() {

  function renderTableRow(desc, value, category, date) {
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
        <td>
          <Badge>
            {category}
          </Badge>
        </td>
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
            <th>Categoría</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow("Hamburguesa", "12000", "comida", "10/12/2021")}
          {renderTableRow("Camiseta", "10000", "ropa", "10/12/2021")}
          {renderTableRow("Mantenimiento", "200000", "vehiculo", "10/12/2021")}
          {renderTableRow("Forro de celular", "15000", "food", "10/12/2021")}
          {renderTableRow("Memoria Ssd", "157000", "computador", "10/12/2021")}
          {renderTableRow("Almuerzo", "11300", "food", "10/12/2021")}
          {renderTableRow("Hamburguesa", "12000", "comida", "10/12/2021")}
          {renderTableRow("Camiseta", "10000", "ropa", "10/12/2021")}
          {renderTableRow("Mantenimiento", "200000", "vehiculo", "10/12/2021")}
          {renderTableRow("Forro de celular", "15000", "food", "10/12/2021")}
          {renderTableRow("Memoria Ssd", "157000", "computador", "10/12/2021")}
          {renderTableRow("Almuerzo", "11300", "food", "10/12/2021")}
          {renderTableRow("Hamburguesa", "12000", "comida", "10/12/2021")}
          {renderTableRow("Camiseta", "10000", "ropa", "10/12/2021")}
          {renderTableRow("Mantenimiento", "200000", "vehiculo", "10/12/2021")}
          {renderTableRow("Forro de celular", "15000", "food", "10/12/2021")}
          {renderTableRow("Memoria Ssd", "157000", "computador", "10/12/2021")}
          {renderTableRow("Almuerzo", "11300", "food", "10/12/2021")}
        </tbody>
      </Table>
    );
  }
  return renderUI();
}