import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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

    // rutina que realiza la salida del usuario
    const salir = () => {
        sessionStorage.removeItem("usuarioLogueado");
        setUsuarioLogueado(obtenerUsuarioLogueado);
    }

    return (
        <AppBar>
            <Toolbar>
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
        </AppBar>
    )
}

export default MenuPrincipal;