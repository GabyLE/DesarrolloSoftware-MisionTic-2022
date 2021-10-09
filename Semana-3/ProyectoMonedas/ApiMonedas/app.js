const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('Servicio de BD Monedas en funcionamiento');
});

//Cargar librería para 'parseo' de contenido JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// //Cargar libreria para habilitar cors
// const cors = require('cors')
// app.use(cors())

require("./routes/moneda.rutas")(app);
require("./routes/pais.rutas")(app);
require("./routes/usuario.rutas")(app);

app.listen(puerto, () => {
    console.log(`Servicio de BD Monedas escuchando en http://localhost:${puerto}`);
})