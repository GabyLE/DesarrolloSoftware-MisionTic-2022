// cargar la libreria o modulo EXPRESS.JS
let express = require("express");
let puerto = 3000;

// definir el objeto de la aplicación
let app = express();

// req->request: solicitud res->response: respuesta
app.get("/", (req, res) => {
    res.send("Hola Mundo");
}
);

// inicia el servicio
app.listen(puerto, () => {
    console.log("Servicio disponible en la URL http://localhost:" + puerto);
}

);