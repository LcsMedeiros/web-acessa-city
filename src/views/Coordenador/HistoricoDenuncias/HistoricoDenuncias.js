import React, { useState } from 'react';
import './styles.css';
import API from '../../../utils/API';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TextField,
  Modal
} from '@material-ui/core';

class HistoricoDenuncias extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        reports: [],        
    }
  }

  render() {  
    const reports = this.state.reports;  
    
    return (
      <div>
        <h2>Histórico</h2>
        <div id="geral" align="right">          
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Titulo</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map(report => (
              <TableRow
                hover
                key={report.id}                
              >
                <TableCell><a href={`/denuncia-coordenador/${report.id}`}>{report.id}</a></TableCell>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.creationDate}</TableCell>                
                <TableCell>{report.reportStatus.description}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>

    )
  }
    async componentDidMount() {
    let reports = await API.get('/report');
    reports = reports.data;
    this.setState(function(state, props) {
        return {
            reports
        }
    })
}

}

export default HistoricoDenuncias;