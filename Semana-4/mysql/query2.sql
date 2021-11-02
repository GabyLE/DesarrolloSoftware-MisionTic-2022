USE Comercializadora;

DROP VIEW IF EXISTS vVenta2;

DELIMITER//
CREATE VIEW vVenta
AS
	SELECT V.*, C.Nombre Cliente, FP.FormaPago
		FROM Venta V
			JOIN Cliente C ON V.IdCliente = C.Id
            JOIN FormaPago FP ON V.IdFormapago = FP.Id;
            
CAmpo calculado 
CREATE PROCEDURE spActualizarVenta 
(
IN idVenta INT,
IN idCliente INT,
IN Fecha DATE,
IN Cuenta VARCHAR(50),
IN idFormaPago INT,
IN Factura
)
BEGIN
	if id <= 0 THEN
		insert int Venta
        (idCliente, Fecha, Cuenta, idFormaPago, Factura)
        VALUES (idCliente, Fecha, Cuenta, idFormaPago, Factura)
        ELSE
			UPDATE Venta
            SET idCliente = idCliente,
            Fecha = Fecha,
            Cuenta = Cuenta,
            idFormaPago = idFormapago,
            Factura = Factura
            WHERE Id = idVenta
	end if
END//

CREATE PROCEDURE spActualizarVentaDetalle
(
IN IdVentaA INT,
IN IdProductoA INT,
IN Cantidad FLOAT,
IN ValorUnitario FLOAT,
IN Iva FLOAT
)
BEGIN
	IF EXISTS (SELECT * FROM VentaDetalle WHERE IdVEnta = IdVentaA AND IdProducto = IdProductoA) THEN
		UPDATE VentaDetalle
			SET Cantidad = Cantidad,
            ValorUnitario = ValorUnitario,
            Iva = Iva
            WHERE IdVenta = IdVentaA AND IdProducto = IdProductoA
	ELSE
		INSERT INTO VentaDetalle
			(IdVenta, IdProducto, Cantidad, ValorUnitario, Iva)
            VALUES
            (IdVentaA, IdProductoA, Cantidad, ValorUnitario, Iva)
	END IF
END//

use Monedas;
call spBuscarMonedas ('Peso', 0);