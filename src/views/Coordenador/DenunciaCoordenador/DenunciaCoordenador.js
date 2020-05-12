import React from 'react';
import './styles.css';
import API from '../../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
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
  Modal,
  Typography,
  Avatar,
  LinearProgress,
  Grid,
} from '@material-ui/core';

/* const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  cartao: {

  }
}); */

class DenunciaCoordenador extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        reports: [],
    }
  }
  render(){
    const reports = this.state.reports;
  
    const useStyles = makeStyles(theme => ({
      root: {
        maxWidth: 700,
        maxHeight: 700,
      },
      cartao: {
    
      }
    }));
  /* let { id } = useParams(); 

  /* const [denuncia, setDenuncia] = useState([
    {
      "userId": "553b0d79-20c1-49f3-8c2d-820128a293af",
      "categoryId": "54301122-bcea-404d-be0b-f1906a512c65",
      "urgencyLevelId": "553b0d79-20c1-49f3-8c2d-820128a293af",
      "reportStatusId": "96afa0df-8ad9-4a44-a726-70582b7bd010",
      "title": "Cidadão impossibilitado de andar na rua",
      "description": "Mais uma Cidadão impossibilitado de andar na rua Cidadão impossibilitado de andar na rua Cidadão impossibilitado de andar na rua Cidadão impossibilitado de andar na rua Cidadão impossibilitado de andar na rua",
      "latitude": -22.89205650,
      "longitude": -47.20797940,
      "accuracy": 1.9,
      "img_url": "https://farm3.staticflickr.com/2577/4078541979_07cf46fa28_b.jpg"
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
  } */
  
  return (
    <div id="geral">
      <div id="cartao" >
      </div>
      <div id="cartao">
        <Card /* className={classes.root} */
        style={{
          maxWidth: 700,
          maxHeight: 700,
        }}>
          <CardContent>
            <div>
              <div>
                {reports.map(report => (
                  <div>
                    {<CardHeader title={report.id} />}
                    <CardHeader title={report.title} />
                    <img class="image" src={report.img_url} />
                  </div>
                ))}

              </div>
            </div>
            <div>
            </div>
          </CardContent>
        </Card>
        <Card /* className={classes.root} */
        style={{
          maxWidth: 700
        }}
        >
          <CardContent>
            <div>
              <CardHeader title="Descrição" />
              {reports.map(report => (
                <div>
                  <Typography align="justify">{report.description}</Typography>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <CardActions>
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
          Aprovar
        </Button>
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
          Negar
        </Button>
      </CardActions>
    </div>
  )
 }
 async componentDidMount() {
  let reports = await API.get('/report?status=c37d9588-1875-44dd-8cf1-6781de7533c3');
  reports = reports.data;
  this.setState(function(state, props) {
      return {
          reports
      }
  })
}
}

export default DenunciaCoordenador;