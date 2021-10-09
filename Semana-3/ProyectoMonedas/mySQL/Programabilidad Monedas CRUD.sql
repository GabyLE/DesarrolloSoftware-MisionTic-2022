USE Monedas;
DROP VIEW IF EXISTS vPais;
DROP VIEW IF EXISTS vCambioMoneda;

DROP PROCEDURE IF EXISTS spListarMonedas;
DROP PROCEDURE IF EXISTS spBuscarMonedas;
DROP PROCEDURE IF EXISTS spActualizarMoneda;
DROP PROCEDURE IF EXISTS spBuscarMoneda;
DROP PROCEDURE IF EXISTS spListarPaises;
DROP PROCEDURE IF EXISTS spBuscarPaises;
DROP PROCEDURE IF EXISTS spActualizarPais;
DROP PROCEDURE IF EXISTS spBuscarPais;
DROP PROCEDURE IF EXISTS spListarCambioMonedas;
DROP PROCEDURE IF EXISTS spListarCambiosMoneda;
DROP PROCEDURE IF EXISTS spActualizarCambioMoneda;
DROP PROCEDURE IF EXISTS spBuscarCambioMoneda;


-- ***** MONEDA *****
-- ** Procedimiento almacenado para listar MONEDAS
DELIMITER //
CREATE PROCEDURE spListarMonedas()
BEGIN
	SELECT Id, Moneda, Sigla, Simbolo, Emisor
		FROM Moneda
		ORDER BY Moneda;
END//

-- ** Procedimiento almacenado para buscar una MONEDA
CREATE PROCEDURE spBuscarMonedas(
IN Dato varchar(50),
IN Tipo int
)
BEGIN
	DECLARE InstruccionSQL varchar(1000);
	SET Dato=CONCAT(char(39),Dato,'%',char(39));
	SET InstruccionSQL='SELECT * FROM Moneda';
	IF Tipo=0 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Moneda LIKE ',Dato,' AND Id>0');
	ELSEIF Tipo=1 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Sigla LIKE ',Dato,' AND Id>0');
	ELSEIF Tipo=2 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Emisor LIKE ',Dato,' AND Id>0');
	END IF;
	SET InstruccionSQL=CONCAT(InstruccionSQL,' ORDER BY Moneda');

	SET @InstruccionSQL=InstruccionSQL;
	PREPARE ejecucion FROM @InstruccionSQL;
	EXECUTE ejecucion;
	DEALLOCATE PREPARE ejecucion;

END//

-- ** Procedimiento almacenado para agregar o modificar MONEDA

CREATE PROCEDURE spActualizarMoneda(
IN IdMoneda int,
IN Moneda varchar(100),
IN Sigla varchar(5),
IN Simbolo varchar(5),
IN Emisor varchar(100)
)
BEGIN
	IF IdMoneda<=0 THEN
		INSERT INTO Moneda 
			(
			Moneda, Sigla, Simbolo, Emisor
			)
			VALUES(
			Moneda, Sigla, Simbolo, Emisor
			);
	ELSE
		UPDATE Moneda
			SET Moneda=Moneda,
			Sigla=Sigla,
			Simbolo=Simbolo, 
			Emisor=Emisor
			WHERE Id =  IdMoneda;
	END IF;
END//

-- ** Procedimiento almacenado para buscar una MONEDA
CREATE PROCEDURE spBuscarMoneda(
IN Moneda varchar(50)
)
BEGIN
	SELECT Id
		FROM Moneda
			WHERE Moneda=Moneda;
END//

-- ***** PAIS *****

CREATE VIEW vPais
AS
SELECT Pais.Id, Pais, CodigoAlfa2, CodigoAlfa3, IdMoneda, Moneda, Sigla
	FROM Pais
		JOIN Moneda
			ON Pais.IdMoneda=Moneda.Id;

-- ** Procedimiento almacenado para listar PAISES
CREATE PROCEDURE spListarPaises (
)
BEGIN
	SELECT *
		FROM vPais
		WHERE vPais.Id>0
		ORDER BY Pais;
END//

CREATE PROCEDURE spBuscarPaises(
IN Dato varchar(50),
IN Tipo int
)
BEGIN
	DECLARE InstruccionSQL varchar(1000);
	SET Dato=CONCAT(char(39),Dato,'%',char(39));
	SET InstruccionSQL='SELECT * FROM vPais';
	IF Tipo=0 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE Pais LIKE ',Dato,' AND Id>0');
	ELSEIF Tipo=1 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE (CodigoAlfa2 LIKE ',Dato,' OR CodigoAlfa3 LIKE ',Dato, ') AND Id>0');
	ELSEIF Tipo=2 THEN
		SET InstruccionSQL=CONCAT(InstruccionSQL,' WHERE (Moneda LIKE ',Dato,' OR Sigla LIKE ',Dato, ') AND Id>0');
	END IF;
	SET InstruccionSQL=CONCAT(InstruccionSQL,' ORDER BY Pais');

	SET @InstruccionSQL=InstruccionSQL;
	PREPARE ejecucion FROM @InstruccionSQL;
	EXECUTE ejecucion;
	DEALLOCATE PREPARE ejecucion;

END//

-- ** Procedimiento almacenado para agregar o modificar PAIS
CREATE PROCEDURE spActualizarPais(
IN IdPais int,
IN Pais varchar(50),
IN CodigoAlfa2 varchar(5),
IN CodigoAlfa3 varchar(5),
IN IdMoneda int
)
BEGIN
	IF IdPais<=0 THEN
		INSERT INTO Pais 
			(
			Pais, IdMoneda, CodigoAlfa2, CodigoAlfa3
			)
			VALUES(
			Pais, IdMoneda, CodigoAlfa2, CodigoAlfa3
			);
	ELSE
		UPDATE Pais
			SET Pais=Pais,
				IdMoneda=IdMoneda,
				CodigoAlfa2=CodigoAlfa2,
				CodigoAlfa3=CodigoAlfa3
			WHERE Id =  IdPais;
	END IF;
END//


-- ** Procedimiento almacenado para buscar un PAIS
CREATE PROCEDURE spBuscarPais(
IN PaisBuscado varchar(50)
)
BEGIN
	SELECT Id
		FROM Pais
			WHERE Pais=PaisBuscado;
END//

-- ***** CAMBIO DE MONEDA *****

CREATE VIEW vCambioMoneda
AS
SELECT Fecha, IdMoneda, Moneda, Sigla, Cambio
	FROM CambioMoneda
		JOIN Moneda
			ON CambioMoneda.IdMoneda=Moneda.Id;

-- ** Procedimiento almacenado para listar CAMBIOS DE MONEDAS
CREATE PROCEDURE spListarCambioMonedas(
)
BEGIN
	SELECT *
		FROM vCambioMoneda
		ORDER BY Moneda, Fecha;
END//

-- ** Procedimiento almacenado para listar CAMBIOS DE UNA MONEDA
CREATE PROCEDURE spListarCambiosMoneda(
IN IdMoneda int
)
BEGIN
	SELECT Cambio, Fecha
		FROM CambioMoneda
		WHERE IdMoneda=IdMoneda
		ORDER BY Fecha DESC;
END//

-- ** Procedimiento almacenado para agregar o modificar CAMBIO DE MONEDA
CREATE PROCEDURE spActualizarCambioMoneda(
IN IdMoneda int,
IN Fecha date,
IN Cambio float
)
BEGIN
	IF EXISTS(SELECT *
				FROM CambioMoneda
					WHERE IdMoneda=IdMoneda
						AND Fecha=Fecha) THEN
		
		UPDATE CambioMoneda
			SET Cambio=Cambio
			WHERE IdMoneda=IdMoneda
				AND Fecha=Fecha;
	ELSE
		INSERT INTO CambioMoneda 
			(
			IdMoneda, Fecha, Cambio
			)
			VALUES(
			IdMoneda, Fecha, Cambio
			);
	END IF;
END//

-- ** Procedimiento almacenado para buscar un CAMBIO DE MONEDA
CREATE PROCEDURE spBuscarCambioMoneda(
IN IdMoneda int,
IN Fecha date
)
BEGIN
	SELECT *
		FROM CambioMoneda
			WHERE IdMoneda=IdMoneda
				AND Fecha=Fecha;
END//

-- ***** CAMBIO DE MONEDA *****

CREATE PROCEDURE spValidarAccesoUsuario(
IN UsuarioV varchar(50),
IN ClaveV varchar(50)
)
BEGIN
	SELECT Id, Usuario, Nombre
		FROM Usuario
		WHERE Usuario=UsuarioV
			AND Clave=ClaveV;
END//
