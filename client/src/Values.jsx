import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function Values() {
  return (
    <div style={{ height: 550, width: '99%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'importance', headerName: 'Importance', width: 150,  editable: true },
  { field: 'value', headerName: 'Value', width: 200, editable: true },
  { field: 'currentScore', headerName: 'Current Score', width: 200, editable: true },
  { field: 'targetScore', headerName: 'Target Score', width: 200, editable: true },
  { field: 'description', headerName: 'Description', width: 250, editable: true },
  { field: 'opporunity', headerName: 'Opportunity', width: 200, editable: true },
  { field: 'habit', headerName: 'Habit', width: 200, editable: true },
];

const rows = [
  {
    id: 1,
    importance: 1,
    value: "Cultivating a Family w/ Values",
    currentScore: 60,
    targetScore: 95,
    description: "Ensuring happiest lives and pass down good core values",
    opporunity: 35,
    habit: "meditate",
  }
];
