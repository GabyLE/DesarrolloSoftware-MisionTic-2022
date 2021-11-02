//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

// cargar la libreria de encriptado
const Bcrypt = require('bcrypt');

// cargar la libreria de generacion de tokens
const jwt = require('jsonwebtoken');

// cargar configuracion de sguridad
var seg = require('../config/seguridad.config');

//constructor
var Usuario = function (usuario) {
    this.id = usuario.Id;
    this.usuario = usuario.Usuario;
    this.nombre = usuario.Nombre;
}

// Metodo para cambiar la clave de un usuario
Usuario.cambiarClave = (usuario, clave, resultado) => {
    sql.query("CALL spActualizarClaveUsuario(?, ?);",
    [usuario, Bcrypt.hashSync(clave, 10)], (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error actualizando clave:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length == 0) {
            console.log("Usuario no encontrado: ", res[0]);
            resultado({tipo: "No encontrado"}, null);
            return;
        }

        console.log("Clave actualizada", {usuario});
        resultado(null, {usuario});

    });
}

function obtenerClave(usuario){
    return new Promise((resolve, reject) => {
        sql.query(`SELECT Clave FROM Usuario WHERE Usuario='${usuario}';`,
        (err, res) => {
            if (err) {
                return reject(err);
            }
            else {
                // el usuario no existe
                if(res.length == 0){
                    resolve('');
                }
                else{
                    resolve(res[0].Clave);
                }
            }
        });
    });
    
}

//Metodo que valida las credenciales de un usuario
Usuario.validarAcceso = async (usuario, clave, resultado) => {

    const claveGuardada = await obtenerClave(usuario);

    if(claveGuardada){
        // confrontar las claves
        if(Bcrypt.compareSync(clave, claveGuardada)){
            
            // Generar token
            const token = jwt.sign(
                {usuario: usuario},
                seg.CLAVE,
                { expiresIn: seg.VIGENCIA}
            );

            const data = JSON.stringify({
                mensaje: "Autenticación válida",
                Token: token
            });

            resultado(null, data);
        }
        else {
            resultado({ tipo: "Credenciales no válidas" }, null);
        }
    }
    else {
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
        console.log("Usuario no válido");
    }
            
            
       
}


module.exports = Usuario;