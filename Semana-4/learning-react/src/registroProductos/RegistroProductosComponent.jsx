import React, { Fragment } from "react";

function RegistroProdutosComponent() {
    return (
        <Fragment>
            <form method="post" action="test.php">
                <label for="Código">Código:</label>
                <input type="text" size="30" name="Código" id="Código" value="Teclea Código" /><br />
                <label for="Id. Producto">Id. Producto:</label>
                <input type="text" size="30" name="email" id="email" /><br />
                <label for="Vlr.">Valor Unitario:</label>
                <input type="text" size="30" name="Valor Unitario" id="Valor Unitario" value="" /><br />
                <label for="Estado">Estado:</label>
                <select>
                    <option value="Disponible">Disponible
                    </option><option value="No Disponible">No Disponible
                    </option></select>
            </form>
            <br />
            <input type="submit" value="Guardar" name="Guardar" style="width: 86px;" />
            <input type="reset" value="Cancelar" name="Cancelar" style="width: 86px;" />
        </Fragment>
    );
}

export default RegistroProdutosComponent;