import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

// import CityhallService from '../../../api/cityhall/cityhall-service';

import api from '../../../utils/API';

const useStyles = makeStyles(() => ({
  root: {}
}));

const FormAprovarDenuncia = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    cnpj: '',
    address: '',
    neighbornhood: '',
    zipCode: '',
    state: '',
    city: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  async function onRegisterCityhall(event) {
    event.preventDefault();

    //post aprovar denuncia
    return await api.post('/', values);

  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
        onChange={onRegisterCityhall}
      >
        <CardHeader
          title="Aprovar denúncia"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Descreva o motivo dessa aprovação."
                label="Descrição da aprovação"
                margin="dense"
                name="descricao"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
              <TextField
                id="date"
                label="Data de finalização"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Confirmar Aprovação
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

/* CityHallCreate.propTypes = {
  className: PropTypes.string
}; */

export default FormAprovarDenuncia;
