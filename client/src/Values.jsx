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
    try {
    let values = await axios.get('/api/values');
    
    values = await values.data.map((value)=>{
      value.opportunity = value.target_score - value.current_score 
      return value
    }) 
    this.setState({ values: values });
   }
    catch(e){
        console.log(e)
      }
    };
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

export default Values