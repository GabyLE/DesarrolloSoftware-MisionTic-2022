import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LaptopWindows } from "@material-ui/icons";
import { obtenerEstilosModal } from "../../services/Listas";



const Formulario = ({ cerrarFormulario, monedaEditada }) => {

    const estilos = obtenerEstilosModal();

    const [moneda, setMoneda] = useState(monedaEditada.moneda);
    const [sigla, setSigla] = useState(monedaEditada.sigla);
    const [simbolo, setSimbolo] = useState(monedaEditada.simbolo);
    const [emisor, setEmisor] = useState(monedaEditada.emisor);

    const guardar = (e) => {

        fetch("http://localhost:3010/monedas",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Id: monedaEditada.id,
                    Moneda: moneda,
                    Sigla: sigla,
                    Simbolo: simbolo,
                    Emisor: emisor
                })
            }
        ).
            then((res) => res.json()).
            then((json) => {
                window.alert(json.moneda);
                cerrarFormulario();
            }).
            catch(function (error) {
                window.alert(`error agregando moneda [${error}]`);
            });
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <TextField
                label="Nombre de la moneda"
                variant="filled"
                required
                value={moneda}
                onChange={(e) => { setMoneda(e.target.value) }}
            />
            <TextField
                label="Sigla"
                variant="filled"
                required
                value={sigla}
                onChange={(e) => { setSigla(e.target.value) }}
            />
            <TextField
                label="Símbolo"
                variant="filled"
                required
                value={simbolo}
                onChange={(e) => { setSimbolo(e.target.value) }}
            />
            <TextField
                label="Entidad Emisora"
                variant="filled"
                required
                value={emisor}
                onChange={(e) => { setEmisor(e.target.value) }}
            />
            <div>
                <Button variant="contained" onClick={cerrarFormulario}>
                    Cancelar
                </Button>
                <Button variant="contained" type="submit" color="Primary">
                    Aceptar
                </Button>
            </div>
        </form>
    )

}


export default Formulario;