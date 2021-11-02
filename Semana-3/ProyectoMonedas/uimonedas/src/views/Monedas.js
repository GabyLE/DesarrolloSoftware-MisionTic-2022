import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import ModalEditar from '../components/EditarMoneda/Modal';
import Confirmacion from '../components/Confirmacion';
import { listarMonedas, Moneda, obtenerEstilos } from '../services/Listas';

const columnas = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "moneda", headerName: "Nombre", width: 300 },
    { field: "sigla", headerName: "Sigla", width: 200 },
    { field: "simbolo", headerName: "Símbolo", width: 200 },
    { field: "emisor", headerName: "Entidad Emisora", width: 300 },
]




const Monedas = () => {

    const estilos = obtenerEstilos();

    //variable que almacenará la lista de monedas
    const [monedas, setMonedas] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const [estadoModal, setEstadoModal] = useState(false);

    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    const [monedaEditada, setMonedaEditada] = useState({});

    async function obtenerMonedas () {
        const monedasT = await listarMonedas();

        setMonedas(monedasT);
        setEstadoListado(false);
    }

    if (estadoListado) {
        obtenerMonedas();
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const agregar = () => {
        const monedaE = new Moneda(-1, "", "", "", "");
        setMonedaEditada(monedaE);

        setEstadoModal(true);
    }

    const modificar = () => {
        if (monedaSeleccionada) {
            const monedaE = monedaSeleccionada;
            setMonedaEditada(monedaE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione la moneda a editar");
        }
    }

    const eliminar = () => {
        if (monedaSeleccionada) {
            const monedaE = monedaSeleccionada;
            setMonedaEditada(monedaE);
            setEstadoConfirmacion(true);
        }
        else {
            window.alert("Por favor seleccione la moneda a eliminar");
        }
    }

    const confirmarEliminacion = () => {

        fetch(`http://localhost:3010/monedas/${monedaEditada.id}`,
            {
                method: 'delete',
            }
        ).
            then((res) => {
                if (res.status != 200) {
                    throw Error(res.statusText);
                }
                return res.json();
            }).
            then((json) => {
                window.alert(json.message);
                setEstadoListado(true);
            }).

            catch(function (error) {
                window.alert(`error eliminando moneda [${error}]`);
            });
    }

    const cerrarConfirmacion = () => {
        setEstadoConfirmacion(false);
    }

    var monedaSeleccionada;

    return (
        <div>
            <center>
                <h1>
                    Lista de Monedas
                </h1>
            </center>
            <div style={{ height: 500, width: '100%' }}>
                <Button className={estilos.botonAgregar} onClick={agregar}>
                    Agregar
                </Button>
                <Button className={estilos.botonModificar} onClick={modificar}>
                    Modificar
                </Button>
                <Button className={estilos.botonEliminar} onClick={eliminar}>
                    Eliminar
                </Button>
                <DataGrid
                    rows={monedas}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}

                    onSelectionModelChange={(idMonedas) => {
                        const monedasSeleccionadas = monedas.filter(
                            function (fila) {
                                return fila.id == idMonedas[0];
                            }
                        );
                        monedaSeleccionada = monedasSeleccionadas[0];
                    }
                    }

                />

                <ModalEditar open={estadoModal} cerrar={cerrarModal} moneda={monedaEditada} />

                <Confirmacion open={estadoConfirmacion}
                    titulo={"Eliminando una moneda"}
                    mensaje={"Está seguro?"}
                    cerrar={cerrarConfirmacion}
                    aceptar={confirmarEliminacion}
                />
            </div>
        </div>
    )
}

export default Monedas;