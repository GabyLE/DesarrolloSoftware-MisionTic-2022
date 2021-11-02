SET @value = SELECT * FROM Venta ORDER BY Id DESC LIMIT 1;
CALL spActualizarVenta(-1, 20,'2020-02-20',56785435, 1,@val);
SELECT @val;
CALL spActualizarVentaDetalle(@val, 20, 20, 20000, 2);
select * from ventadetalle;