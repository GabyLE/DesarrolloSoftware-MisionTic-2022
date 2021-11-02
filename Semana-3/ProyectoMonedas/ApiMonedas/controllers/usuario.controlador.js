//Cargar el modelo de las paises
var Usuario = require('../models/usuario.modelo');

// Metodo web para cambiar la clave
exports.cambiarClave = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener las credenciales de acceso' });
    }

    Usuario.cambiarClave(req.body.Usuario, req.body.Clave, (err, res) => {
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: 'Usuario no existente' });
            }
            else {
                res.status(500).send({ message: 'Error actualizando clave' });
            }
        }
        else {
            //Se devuelve los registros obtenidos
            res.send(data[0]);
        }
    });
}

//Metodo web para validar credenciales de un usuario
exports.validarAcceso = (req, res) => {
    //validar que la solicitud tenga datos
    if (!req.body) {
        res.status(400).send({ message: 'El contenido del mensaje debe tener las credenciales de acceso' });
    }

    Usuario.validarAcceso(req.body.Usuario, req.body.Clave, (err, data) => {
        //Verificar si hubo error
        if (err) {
            if (err.tipo == "No encontrado" || err.tipo == "Credenciales no válidas") {
                res.status(404).send({ message: 'Credenciales no válidas' });
            }
            else {
                res.status(500).send({ message: 'Error validando credenciales de acceso' });
            }
        }
        else {
            //Se devuelve los registros obtenidos
            res.send(data[0]);
        }
    });
}