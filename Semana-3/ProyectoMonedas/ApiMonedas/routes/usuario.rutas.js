module.exports = (app) => {
    var usuarios = require('../controllers/usuario.controlador');

    //metodo que cambia la clave del usuario
    app.post("/usuarios/cambiarclave", usuarios.cambiarClave);

    //metodo que valida las credenciales de un usuario
    app.post("/usuarios/validaracceso", usuarios.validarAcceso);

}