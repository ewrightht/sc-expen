import React, { useEffect } from "react";
import shallow from "zustand/shallow";

import { Table } from "../../../../../styled/Table";
import { Space } from "../../../../../styled/Space";
import { Badge } from "../../../../../styled/Badge";
import { Loader } from "../../../../../styled/Loader";
import { Typography } from "../../../../../styled/Typography";

import { useStores } from "../../../../../stores/useStores";

export default function SummaryTable() {
  const { activities, getAllActivities } = useStores((state) => ({
    activities: state.activities,
    getAllActivities: state.getAllActivities
  }), shallow);

  useEffect(() => {
    getAllActivities();
  }, [activities]);

  function renderTableRow() {
    return activities.map((activity) => (
      <tr key={activity.activity_id}>
        <td>
          <span>
            <i className="far fa-file-alt fa-lg"></i>
            <Space ml="20" />
            <span>{activity.activity_desc}</span>
          </span>
        </td>
        <td></td>
        <td>${activity.activity_amount}</td>
        <td>
          <Badge>
            {activity.activity_category}
          </Badge>
        </td>
        <td>10/10/21</td>
      </tr>
    ));
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
          {activities.length > 0 ? renderTableRow() : (
            <tr>
              <td colSpan="5">
                <Typography>No hay actividad reciente.</Typography>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  }

  if (!activities) return <Loader />;

  return renderUI();
}