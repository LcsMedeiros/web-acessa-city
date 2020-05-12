import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DenunciationsToolbar, DenunciationsTable } from './components';

import API from '../../../utils/API';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DenunciationList = () => {
  const classes = useStyles();

  const [denunciations, setDenunciations] = useState([]);


   //Salvar os dados 
  // const save = (denunciation) => {
  //   API.post('/category',denunciation 
  //   ).then(response => {
  //     // const newDenunciation = response.data;
  //      //setDenunciations(  [...denunciations, newDenunciation])
  //      }).catch(erro => {
  //       console.log(erro);
  //     })
  // }
  

  // Listar os dados  na tela
  const listDenunciations = () => {
    API.get('/report'
    ).then(response => {
       const listDenunciations2 = response.data;
       console.log(listDenunciations2);
       setDenunciations(listDenunciations2);
       }).catch(erro => {
        console.log(erro);
      })
  }

 
  const filter = (filtro) =>{

    API.get(`/report?category=${filtro.category}&street=${filtro.street}&neighborhood=${filtro.neighborhood}&creationDate=${filtro.creationDate}`,
    ).then(response => {
      const filterDenunciation = response.data;
      console.log("oque tem aqui" + JSON.stringify(filterDenunciation));
       }).catch(erro => {
        console.log(erro);
      })

  }
  




  // Atualizar os dados na tela
  useEffect(() => {
    listDenunciations();
  },[]);


  return (
    <div className={classes.root}>
      {/* <DenunciationsToolbar save={save} /> */}
       <DenunciationsToolbar denunciations={denunciations}  filter={filter}/>
      <div className={classes.content}>
        <DenunciationsTable denunciations={denunciations} />
      </div>
    </div>
  );
};

export default DenunciationList;
