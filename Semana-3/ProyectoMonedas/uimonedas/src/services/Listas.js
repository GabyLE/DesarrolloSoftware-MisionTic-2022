import { makeStyles } from '@material-ui/core/styles';


export const Moneda = function (id, moneda, sigla, simbolo, emisor) {
    this.id = id;
    this.moneda = moneda;
    this.sigla = sigla;
    this.simbolo = simbolo;
    this.emisor = emisor;
}

export const Pais = function (id, pais, codigoAlfa2, codigoAlfa3, idMoneda, moneda, sigla) {
    this.id = id;
    this.pais = pais;
    this.codigoAlfa2 = codigoAlfa2;
    this.codigoAlfa3 = codigoAlfa3;
    this.moneda = new Moneda(idMoneda, moneda, sigla, '', '');
}
export const obtenerEstilosModal = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

export const obtenerEstilos = makeStyles(theme => ({
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#55ff55",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        padding: "10px 10px",
        fontSize: "18px"
    }

}));

//Consultar la lista de monedas desde la API
export const listarMonedas = () => {
    //Consultar la lista de monedas desde la API
    return fetch("http://localhost:3010/monedas", { method: "get" })
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP error, estado: ${res.status}`);
        }
        return res.json();
    })
    .then((json) => {
        var monedas = [];
        json.map((item) => {
            monedas.push(new Moneda(item.Id,
                item.Moneda,
                item.Sigla,
                item.Simbolo,
                item.Emisor
            ));
        });
        return monedas;
    })
    .catch(function (error) {
        window.alert(`Error consultarndo monedas [${error}]`);
    });
}

//Consultar la lista de paises desde la API
export const listarPaises = () => {
    //Consultar la lista de paises desde la API
    return fetch("http://localhost:3010/paises", { method: "get" })
    .then((res) => {
        if(!res.ok){
            throw new Error(`HTTP error, estado: ${res.status}`);
        }
        return res.json();
    })
    .then((json) => {
        var paises = [];
        json.map((item) => {
            paises.push(new Pais(item.Id,
                item.Pais,
                item.CodigoAlfa2,
                item.CodigoAlfa3,
                item.idMoneda,
                item.Moneda,
                item.Sigla,
            ));
        });
        return paises;
    })
    .catch(function (error) {
        window.alert(`Error consultarndo paises [${error}]`);
    });
}