import React, { Fragment } from 'react';
import HeaderComponent from '../shared/components/header/HeaderComponent';
import ListVentasComponent from '../listadoVentas/ListVentasComponent';
import RegistroVentasComponent from '../registroVentas/RegistroVentasComponent';
import './ventasStyles.css';

function VentasPage() {

    return (
        <Fragment>
            
            <div id="content-wrapper" className="w-100">
                <HeaderComponent currentUser = "Gabriela López"/>
                <div id="content" className="container-fluid d-flex flex-column ">
                    <h5 id ="title" >Módulo de Administración de Ventas</h5>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Listado de Ventas</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Registro de Venta</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ListVentasComponent /></div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><RegistroVentasComponent/></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default VentasPage;