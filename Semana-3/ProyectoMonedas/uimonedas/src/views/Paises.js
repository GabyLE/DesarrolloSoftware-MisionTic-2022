import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { listarPaises, obtenerEstilos} from '../services/Listas';
import { Button } from "@material-ui/core";




const columnas = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "pais", headerName: "País", width: 300 },
    { field: "codigoAlfa2", headerName: "Código Alfa 2", width: 200 },
    { field: "cofigoAlfa3", headerName: "Código Alfa 3", width: 200 },
    { field: "moneda", headerName: "Moneda", width: 300 },
]

const Paises = () => {

    const estilos = obtenerEstilos();

    const [paises, setPaises] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    var paisSeleccionado;

    async function obtenerPaises () {
        const paisesT = await listarPaises();

        setPaises(paisesT);
        setEstadoListado(false);
    }

    if (estadoListado){
        obtenerPaises();
    }

    const agregar = () => {

    }

    const modificar = () => {
        
    }

    const eliminar = () => {
        
    }

    return (
        <div>
            <center>
                <h1>
                    Lista de Paises
                </h1>
            </center>
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
                    rows={paises}
                    columns={columnas}
                    pageSize={7}
                    rowsPerPageOptions={[7]}

                />

        </div>
    )
}

export default Paises;