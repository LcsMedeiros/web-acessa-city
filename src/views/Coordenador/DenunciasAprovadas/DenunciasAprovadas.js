import React, { useState } from 'react';
import './styles.css';
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
import API from '../../../utils/API';

const DenunciasAprovadas = () => {

API.get('/category')

  const [denuncia, setDenuncia] = useState([
    {
      "id": "123123123",
      "titulo": "Placa derrubada",
      "categoria": "Infraestrutura",
      "bairro": "Jardim",
      "data":"01/02/2020"
    },
    {
      "id": "133133133",
      "titulo": "Buraco",
      "categoria": "Infraestrutura",
      "bairro": "Rosolém",
      "data":"01/02/2020"
    }
  ]);
  let infoDenuncia = [];
  function Teste(evento) {
    infoDenuncia = evento;
    console.log(infoDenuncia);

  }  

  function TesteBotao(denuncia) {
    let ultimasDenuncias = [...denuncia];
    setDenuncia(...denuncia, ultimasDenuncias);
  }
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
        href= "/denuncias-aprovadas"
      >          
     
        Denúncias Aprovadas
     </Button>
     </div> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {denuncia.map(denuncia => (
            <TableRow
              hover              
              key={denuncia.id}
              onClick={() => Teste(

                /* [
                  denuncia.id
                ] */
                )}
            >
              <TableCell><a href={`/encerrar-denuncia/${denuncia.id}`}>{denuncia.id}</a></TableCell>
              <TableCell>{denuncia.titulo}</TableCell>
              <TableCell>{denuncia.categoria}</TableCell>
              <TableCell>{denuncia.bairro}</TableCell>
              <TableCell>{denuncia.data}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>

  )
}

export default DenunciasAprovadas;