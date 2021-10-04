import React, { Fragment } from "react";
import HeaderComponent from '../shared/components/header/HeaderComponent';
import ListProductsComponent from "../listadoProductos/ListProductsComponent";
// import RegistroProductosComponent from "../registroProductos/RegistroProductosComponent";


function ProductosPage () {
    return (
        <Fragment>
            
            <div id="content-wrapper" className="w-100">
                <HeaderComponent currentUser = "Gabriela López"/>
                <div id="content" className="container-fluid d-flex flex-column ">
                    <h4 id ="title" >Módulo de Administración de Productos</h4>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Listado de Productos</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Registro de Productos</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ListProductsComponent /></div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductosPage;