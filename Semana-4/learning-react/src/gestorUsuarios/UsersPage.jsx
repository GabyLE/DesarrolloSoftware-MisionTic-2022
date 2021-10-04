import React, { Fragment } from "react";
import HeaderComponent from "../shared/components/header/HeaderComponent";

function UsersPage () {
    return (
        <Fragment>
            <div id="content-wrapper" className="w-100">
            <HeaderComponent/>
            <div class="container">
                    <div class="mt-5"></div>
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6">
                                    {/* <!-- <h2><b>GESTOR DE USUARIOS</b></h2> --> */}
                                </div>
                                <div class="col-lg-12">
                                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                        data-bs-target="#addUsuariosModal"><i class="material-icons">&#xE147;</i>
                                        Usuario
                                    </button>
                                    {/* <!-- <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteUsuariosModal"><i class= "material-icons">&#xE147;</i> -->
                                    <!--     Eliminar -->
                                    <!-- </button> -->
                                    <!-- <a href="#addUsuariosModal" class= "btn btn-outline-primary" data-toggle="modal"><i class= "material-icons">&#xE147;</i>Usuario</a> -->
                                    <!-- <a href="#deleteUsuariosModal" class= "btn btn-outline-danger" data-toggle="modal"><i class= "material-icons">&#xE147;</i>Eliminar</a> --> */}
                                </div>
                            </div>
                        </div>
                        <table id="tabla-usuarios" class="table table-striped table-hover">
                            <thead class="text-center">
                                <tr>
                                    <th>
                                        <span class="custom-checkbox">
                                            <input type="checkbox" id="selectAll"/>
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Rol</th>
                                    <th>Estado</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="text-center">
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="caja1" name="opcion[]" value="1"/>
                                                <label for="caja1"></label>
                                            </span>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <div class="text-center">
                                            <div class="btn-group">
                                                {/* <!-- <button class= "btn btn-primary btnEditar">Editar</button -->
                                                <!-- <button class= "btn btn-danger btnBorrar">Borrar</button> --> */}
                                                <a href="#editUsuariosModal" class="edit" data-bs-toggle="modal"><i
                                                        class="material-icons" data-bs-toggle="tooltip"
                                                        title="Editar">&#xE254;</i></a>
                                                <a href="#deleteUsuariosModal" class="delete" data-bs-toggle="modal"><i
                                                        class="material-icons" data-bs-toggle="tooltip"
                                                        title="Eliminar">&#xE872;</i></a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
        </Fragment>
    );
}

export default UsersPage;