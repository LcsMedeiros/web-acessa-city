import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
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

const TelaPrincipalCoordenador = () => {

  /* const [denuncia, setDenuncia] = useState([
    {
      "id": "190190190",
      "titulo": "Placa derrubada",
      "data":"01/02/2020"
    },
    {
      "id": "190190190",
      "titulo": "Buraco na rua",
      "data":"01/02/2020"
    }
  ]); */

  return (
    <div>
      <h2>Tela Principal Coordenador</h2>
      
      <Button
        color="primary"
        disabled={false}
        width="10px"
        size="large"
        type="submit"
        variant="contained"
        //onClick={}
      >
        Denuncias a serem avaliadas
     </Button>     
    </div>

  )
}

export default TelaPrincipalCoordenador;