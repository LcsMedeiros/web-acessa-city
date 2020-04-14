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

class GerenciarAprovacaoDeDenuncia extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        reports: [],
        report: {
          name: ''
        }
    }
  }

  render() {  
    const reports = this.state.reports;  
    
    return (
      <div>
        <h2>Gerenciar aprovação de denúncias</h2>
        <div id="geral" align="right">
          <Button
            color="primary"
            align="right"
            disabled={false}
            width="10px"
            size="large"
            type="submit"
            variant="contained"
            href="/denuncias-aprovadas"
          >
            Denúncias Aprovadas
     </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Titulo</TableCell>
              <TableCell>Data</TableCell>
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

export default GerenciarAprovacaoDeDenuncia;