import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, Typography, List, ListItem, ListItemText, requirePropFactory } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ModalLogin from './login/Login';

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }
    })
);



const obtenerUsuarioLogueado = () => {
    // obtener los datos del usuario que está logueado
    const strUsuarioLogueado = sessionStorage.getItem("usuarioLogueado");
    return JSON.parse(strUsuarioLogueado);
}

const MenuPrincipal = () => {

    const estilos = obtenerEstilos();

    // Manejo del estado de usuario logueado
    const [usuarioLogueado, setUsuarioLogueado] = useState(obtenerUsuarioLogueado);

    // Manejo del estod de la ventana modal
    const [estadoModal, setEstadoModal] = useState(false);
    // rutina que abre la ventana modal
    const abrirModal = () => {
        setEstadoModal(true);
    }

    // rutina que cierra la ventana modal
    const cerraModal = () => {
        setEstadoModal(false);
        setUsuarioLogueado(obtenerUsuarioLogueado);
    }

    // Manejo del estado del menú
    const [estadoMenu, setEstadoMenu] = useState(false);

    // rutina que desactiva el despliegue del menú
    const mostrarMenu = (estado) => () => {
        setEstadoMenu(estado);
    }



    // rutina que realiza la salida del usuario
    const salir = () => {
        sessionStorage.removeItem("usuarioLogueado");
        setUsuarioLogueado(obtenerUsuarioLogueado);
    }

    const menu = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={mostrarMenu(false)}
        >
            <List>
                {
                    ['Monedas', 'Paises', 'Cambios'].map((texto, indice) => (
                        <ListItem button component="a" href={`/${texto}`} >
                        <img src = {require(`../assets/icons/${texto}.png`).default} />
                            <ListItemText primary={texto} />
                        </ListItem>
                    )
                    )
                }
            </List>
        </Box>
    )

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria_label="Menu Principal"
                    className={estilos.botonMenu}
                    onClick={mostrarMenu(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className = {estilos.titulo}> 
                    Monedas del Mundo
                </Typography>
                <span>
                    {usuarioLogueado ? usuarioLogueado.nombre : ""}
                </span>
                {usuarioLogueado ? (
                    <Button onClick={salir}>
                        Salir
                    </Button>
                ) : (

                    <Button onClick={abrirModal}>
                        Ingresar
                    </Button>
                )}
            </Toolbar>
            <ModalLogin open={estadoModal} cerrar={cerraModal} />
            <Drawer
                anchor = "left"
                open = {estadoMenu}
                onClose = {mostrarMenu(false)}
            >
                {menu()}
            </Drawer>
        </AppBar>
    )
}

export default MenuPrincipal;