import React, { Component} from "react";
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';


class Values extends Component {

  state = {
    values: [],
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    let values = await axios.get('/api/values');
    
    values = await values.data.map((value)=>{
      value.opportunity = value.target_score - value.current_score 
      return value
    })

    this.setState({ values: values });
  }

  render () {
  return (
    <div style={{ height: 550, width: '99%' }}>
      <DataGrid rows={this.state.values} columns={columns} />
    </div>
  );
}
}

const columns = [
  { field: 'importance', headerName: 'Importance', width: 150,  editable: true },
  { field: 'value', headerName: 'Value', width: 200, editable: true },
  { field: 'current_score', headerName: 'Current Score', width: 200, editable: true },
  { field: 'target_score', headerName: 'Target Score', width: 200, editable: true },
  { field: 'description', headerName: 'Description', width: 250, editable: true },
  { field: 'opportunity', headerName: 'Opportunity', width: 200, editable: true },
  { field: 'habit', headerName: 'Habit', width: 200, editable: true },
];

/*
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
*/
export default Values