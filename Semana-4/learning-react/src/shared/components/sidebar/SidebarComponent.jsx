import React, { Fragment } from "react";
import './sidebarStyles.css';
import {Link} from 'react-router-dom';

function SidebarComponent () {
    return (
        <div id="sidebar-wrapper" className="overflow-hidden">
			<div id="sidebar-heading" class="fw-bold">NAVEGACIÓN</div>
			<div class="list-group list-group-flush">
				<Link to="/" class="list-group-item list-group-item-action"><i class="fas fa-home"></i>Inicio</Link>
				<Link to="/productos" class="list-group-item list-group-item-action"><i class="icon ion-md-barcode"></i>Productos</Link>
				<Link to="/ventas" class="list-group-item list-group-item-action"><i class="fas fa-store"></i>Ventas</Link>
				<Link to="/usuarios" class="list-group-item list-group-item-action"><i class="fas fa-users-cog"></i>Usuarios</Link>
			</div>
		</div>
    );
}

export default SidebarComponent;