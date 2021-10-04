import React, { Fragment } from "react";

function RegistroVentasComponent() {
    return (
        <Fragment>
            <form action="" method="get">
                <p>
                    Código de venta: <input type="text" name="nombre" maxlength="50" />
                </p>

                <p>
                    Producto añadido a la compra: <input type="text" name="apellidos" maxlength="50" />
                </p>

                <p>
                    Precio: <input type="text" name="correo" maxlength="100" />
                </p>

                <p>
                    Cantidad: <input type="text" name="correo" maxlength="100" />
                </p>

                <p>
                    Fecha de Venta: <input type="text" name="correo" maxlength="100" />
                </p>

                <p>
                    nombre del Cliente: <input type="text" name="correo" maxlength="100" />
                </p>

                <p>
                    Documento de identidad- Cliente-: <input type="text" name="correo" maxlength="100" />
                </p>

                <p>
                    Nombre del Vendedor: <input type="text" name="correo" maxlength="100" />
                </p>


                <button class="btn btn-primary">
						Registrar
					</button>
            </form>
        </Fragment>
    );
}

export default RegistroVentasComponent;