import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  CardHeader,
  TablePagination,
  Box
} from '@material-ui/core';

//Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//Fim Modal

//Icone 3 bolinhas
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
//FIM Icone 3 bolinhas

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';






const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },

  //modal
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginRight: 10,
    marginTop: 10,
  }
  //FIM modal

}));

//Abrir opções dos 3 pontinho
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
//FIM Abrir opções dos 3 pontinho




const DenunciationsTable = props => {
  const { className, denunciations, ...rest } = props;
  const classes = useStyles();


  //Modal de envio Coordenador
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //FIM Modal de envio Coordenador

  //Modal de Denuncias
  const [openDenunciation, setOpenDenunciation] = React.useState(false);

  const handleOpenDenunciation = () => {
    setOpenDenunciation(true);
  };

  const handleCloseDenunciation = () => {
    setOpenDenunciation(false);
  };
  //FIM Modal de Denuncias

  //Abrir opções dos 3 pontinho
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };
  //FIM Abrir opções dos 3 pontinho

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Denúncias</TableCell>
                  <TableCell>Endereço</TableCell>
                  <TableCell>Bairro</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Datas</TableCell>
                  <TableCell>Ações</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {denunciations.map(denunciation => {
                  return (
                    <TableRow key={denunciation.id}>
                      <TableCell onClick={handleOpenDenunciation}>{denunciation.title}</TableCell>
                      <TableCell>{denunciation.street}</TableCell>
                      <TableCell>{denunciation.neighborhood}</TableCell>
                      <TableCell>{denunciation.category.name}</TableCell>
                      <TableCell>{denunciation.creationDate}</TableCell>


                      <TableCell>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                          <MoreIcon onClick={handleClick} />
                        </IconButton>

                        <StyledMenu
                          id="customized-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose2}
                        >
                          <StyledMenuItem onClick={handleOpen}>
                            <ListItemIcon >
                              <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Enviar Coor." />
                          </StyledMenuItem>

                          <StyledMenuItem>
                            <ListItemIcon>
                              <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Negar" />
                          </StyledMenuItem>


                          {/* Abri Modal envio coordenador  */}

                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                              timeout: 500,
                            }}
                          >
                            {/* Modal da Dereita */}
                            <Fade in={open}>
                              <div className={classes.paper}>
                                <Card className={classes.root}
                                  style={{
                                    maxWidth: 700,
                                    maxHeight: 700,
                                  }}>
                                  <CardContent>
                                    <div>
                                      <div>
                                        <div>
                                          {<CardHeader title={denunciation.id} />}
                                          <CardHeader title={denunciation.title} />
                                          <img class="image" src={denunciation.img_url} />
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card className={classes.root}
                                  style={{
                                    maxWidth: 700
                                  }}
                                >
                                  <CardContent>
                                    <div>
                                      <CardHeader title="Descrição" />
                                      <div>
                                        <Typography align="justify">{denunciation.description}</Typography>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Box className={classes.root}>
                                <Button
                                  mx={200}
                                  color="primary"
                                  align="right"
                                  disabled={false}
                                  width="10px"
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                  href="/denuncias-aprovadas"
                                  className={classes.button}
                                >
                                  Aprovar
                                </Button>
                                <Button
                                  mx={200}
                                  color="primary"
                                  align="right"
                                  disabled={false}
                                  width="10px"
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                  href="/denuncias-aprovadas"
                                  className={classes.button}
                                >
                                  Negar
                                </Button>
                                </Box>
                              </div>
                            </Fade>
                          </Modal>
                          {/* FIM Abri Modal envio coordenador  */}

                        </StyledMenu>
                      </TableCell>

                      {/* Abri Modal Denuncias */}

                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openDenunciation}
                        onClose={handleCloseDenunciation}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                        key={denunciation.id}
                      >
                        <Fade in={openDenunciation}>
                          <div className={classes.paper}>
                            <h2 id="transition-modal-title">{denunciation.title}</h2>
                            <p id="transition-modal-description">{denunciation.description}</p>
                          </div>
                        </Fade>
                      </Modal>

                      {/* FIM Abri Modal Denuncias  */}
                    </TableRow>
                  )
                })
                }
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

DenunciationsTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default DenunciationsTable;
